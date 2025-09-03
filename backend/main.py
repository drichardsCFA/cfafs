from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
import requests

app = FastAPI()

# CORS configuration
frontend_origin = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_origin, "http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory data store for press releases
class PressRelease(BaseModel):
    id: int
    title: str
    content: str

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
    question: str
    limit: Optional[int] = 1

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

