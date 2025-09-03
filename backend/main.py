from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, validator
from typing import List, Optional
import os
import requests
import logging
from contextlib import asynccontextmanager
import uvicorn

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Starting CFAFS backend API...")
    _ensure_weaviate_faq_class()
    yield
    # Shutdown
    logger.info("Shutting down CFAFS backend API...")

app = FastAPI(
    title="CFAFS API",
    description="Central Finance and Assistance Society REST API",
    version="1.0.0",
    docs_url="/docs" if os.getenv("ENVIRONMENT", "development") != "production" else None,
    redoc_url="/redoc" if os.getenv("ENVIRONMENT", "development") != "production" else None,
    lifespan=lifespan
)

# Security middleware
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["localhost", "127.0.0.1", "cfafs.com", "*.cfafs.com"]
)

# CORS configuration
frontend_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://cfafs.com",
    "https://www.cfafs.com",
]

# Add environment-specific origins
if frontend_origin := os.getenv("FRONTEND_ORIGIN"):
    frontend_origins.append(frontend_origin)

app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
    max_age=600,  # Cache preflight requests for 10 minutes
)

# In-memory data store for press releases
class PressRelease(BaseModel):
    id: int = Field(..., gt=0, description="Unique identifier for the press release")
    title: str = Field(..., min_length=1, max_length=200, description="Press release title")
    content: str = Field(..., min_length=1, max_length=5000, description="Press release content")
    
    @validator('title', 'content')
    def validate_no_html(cls, v):
        # Basic HTML sanitization - in production use a proper library like bleach
        if '<' in v or '>' in v:
            raise ValueError('HTML content is not allowed')
        return v.strip()

press_releases = [
    PressRelease(id=1, title="Welcome to CFAFS!", content="We are proud to announce the new CFAFS website launch. More information coming soon."),
    PressRelease(id=2, title="Annual Report Released", content="Review the highlights, milestones, and financial insights from the past year in our Annual Report."),
]

@app.get("/press-releases", response_model=List[PressRelease])
def get_press_releases():
    return press_releases

@app.get("/press-releases/{release_id}", response_model=PressRelease)
def get_press_release(release_id: int):
    release = next((p for p in press_releases if p.id == release_id), None)
    if release is None:
        raise HTTPException(status_code=404, detail="Press release not found")
    return release

@app.post("/press-releases", response_model=PressRelease, status_code=201)
def create_press_release(release: PressRelease):
    if any(p.id == release.id for p in press_releases):
        raise HTTPException(status_code=400, detail="Press release with this ID already exists")
    press_releases.append(release)
    return release

@app.put("/press-releases/{release_id}", response_model=PressRelease)
def update_press_release(release_id: int, updated: PressRelease):
    for idx, p in enumerate(press_releases):
        if p.id == release_id:
            press_releases[idx] = updated
            return updated
    raise HTTPException(status_code=404, detail="Press release not found")

@app.delete("/press-releases/{release_id}", status_code=204)
def delete_press_release(release_id: int):
    global press_releases
    press_releases = [p for p in press_releases if p.id != release_id]
    return

# ---------------------------
# FAQ Semantic Search (server-side)
# ---------------------------

class FAQQuery(BaseModel):
    question: str = Field(..., min_length=2, max_length=500, description="Question to search for")
    limit: Optional[int] = Field(1, ge=1, le=10, description="Maximum number of results")
    
    @validator('question')
    def validate_question(cls, v):
        return v.strip()

class FAQHit(BaseModel):
    question: str
    answer: str
    topic: Optional[str] = None

class FAQResponse(BaseModel):
    hits: List[FAQHit]


WEAVIATE_URL = os.getenv("WEAVIATE_URL", "http://faq:8080")

@app.post("/faq/search", response_model=FAQResponse)
def faq_search(payload: FAQQuery):
    if not payload.question or len(payload.question.strip()) < 2:
        raise HTTPException(status_code=400, detail="Question must be at least 2 characters")

    # Build GraphQL query for Weaviate
    graphql = {
        "query": (
            "{ Get { FAQ(nearText: {concepts: [\"%s\"]}, limit: %d) { question answer topic } } }"
            % (payload.question.replace("\"", "\\\""), max(1, payload.limit or 1))
        )
    }

    try:
        resp = requests.post(f"{WEAVIATE_URL}/v1/graphql", json=graphql, timeout=15)
    except requests.RequestException as exc:
        raise HTTPException(status_code=502, detail=f"Weaviate connection error: {exc}")

    if resp.status_code != 200:
        raise HTTPException(status_code=resp.status_code, detail=f"Weaviate error: {resp.text}")

    data = resp.json()
    hits = data.get("data", {}).get("Get", {}).get("FAQ", [])
    normalized = [FAQHit(question=h.get("question", ""), answer=h.get("answer", ""), topic=h.get("topic")) for h in hits]
    return FAQResponse(hits=normalized)


# ---------------------------
# Auth placeholders
# ---------------------------

class RegisterRequest(BaseModel):
    name: str
    email: str
    company: Optional[str] = None

@app.post("/auth/register-request")
def register_request(req: RegisterRequest):
    # Placeholder: In production, write to a queue or database for manual review
    return {"status": "received", "email": req.email}


# ---------------------------
# Startup initialization for Weaviate schema (idempotent)
# ---------------------------

def _weaviate_class_exists(class_name: str) -> bool:
    try:
        resp = requests.get(f"{WEAVIATE_URL}/v1/schema", timeout=10)
        if resp.status_code != 200:
            return False
        data = resp.json() or {}
        classes = data.get("classes", []) or data.get("Classes", [])
        return any((c.get("class") or c.get("Class")) == class_name for c in classes)
    except requests.RequestException:
        return False


def _ensure_weaviate_faq_class():
    if _weaviate_class_exists("FAQ"):
        return
    class_def = {
        "classes": [
            {
                "class": "FAQ",
                "vectorizer": "text2vec-transformers",
                "properties": [
                    {"name": "question", "dataType": ["text"]},
                    {"name": "answer", "dataType": ["text"]},
                    {"name": "topic", "dataType": ["text"]},
                ],
            }
        ]
    }
    try:
        # Prefer POST /v1/schema with full schema to avoid method mismatch issues
        resp = requests.post(f"{WEAVIATE_URL}/v1/schema", json=class_def, timeout=15)
        if resp.status_code not in (200, 201):
            # Fallback to per-class creation
            requests.post(
                f"{WEAVIATE_URL}/v1/schema/classes",
                json=class_def["classes"][0],
                timeout=15,
            )
    except requests.RequestException:
        pass

    # Seed one example object if none exists
    try:
        q = "What is CFAFS?"
        a = "CFAFS is the Central Finance and Assistance Society."
        obj = {"class": "FAQ", "properties": {"question": q, "answer": a, "topic": "About"}}
        requests.post(f"{WEAVIATE_URL}/v1/objects", json=obj, timeout=10)
    except requests.RequestException:
        pass


# Health check endpoint
@app.get("/health", tags=["Health"])
async def health_check():
    """Health check endpoint for load balancer and monitoring."""
    return {
        "status": "healthy",
        "service": "cfafs-backend",
        "version": "1.0.0"
    }

# Root endpoint
@app.get("/", tags=["Root"])
async def root():
    """Root endpoint with API information."""
    return {
        "message": "CFAFS API",
        "version": "1.0.0",
        "docs": "/docs" if os.getenv("ENVIRONMENT", "development") != "production" else "Documentation disabled in production"
    }

# Custom exception handler
@app.exception_handler(ValueError)
async def value_error_handler(request, exc):
    return JSONResponse(
        status_code=400,
        content={"detail": str(exc), "type": "validation_error"}
    )

