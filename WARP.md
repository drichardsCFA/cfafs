# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

The CFAFS (Central Finance and Assistance Society) website is a modern, full-stack web application with a microservices architecture consisting of:

- **Frontend**: Next.js 15 with TypeScript, React 19, and Tailwind CSS v4
- **Backend**: FastAPI with Python for REST APIs
- **AI Services**: Weaviate vector database with Botpress chatbot
- **Infrastructure**: Docker Compose orchestration

## Common Development Commands

### Full Stack Development
```bash
# Start all services (recommended for full development)
docker compose up -d

# View logs for specific services
docker compose logs frontend
docker compose logs backend
docker compose logs faq
docker compose logs chatbot

# Stop all services
docker compose down
```

### Frontend Development (Next.js)
```bash
# Local development with hot reload
cd frontend
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Backend Development (FastAPI)
```bash
# Local development with auto-reload
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# View API documentation
# Visit http://localhost:8000/docs (Swagger UI)
# Visit http://localhost:8000/redoc (ReDoc)
```

### Testing Individual Components
```bash
# Test single frontend page
cd frontend && npm run dev
# Then navigate to specific route like /about, /loans, etc.

# Test specific API endpoint
curl http://localhost:8000/press-releases

# Test FAQ search functionality
curl -X POST http://localhost:8000/faq/search \
  -H "Content-Type: application/json" \
  -d '{"question": "What is CFAFS?", "limit": 1}'
```

## Architecture Overview

### Service Architecture
The application follows a microservices pattern with four main services:

1. **Frontend (Next.js)** - Port 3000
   - App Router with TypeScript
   - Tailwind CSS v4 for styling
   - Component-based architecture in `src/components/`
   - Pages in `src/app/` directory

2. **Backend (FastAPI)** - Port 8000
   - REST API with automatic OpenAPI documentation
   - Press releases CRUD operations
   - FAQ semantic search integration
   - Authentication placeholders

3. **AI FAQ Service (Weaviate)** - Port 8080
   - Vector database for semantic search
   - Integrated with sentence transformers
   - GraphQL query interface

4. **Chatbot (Botpress)** - Port 3001
   - Standalone chatbot server
   - Integrated via ChatbotLauncher component

### Data Flow
- Frontend communicates with Backend via REST API
- Backend queries Weaviate for FAQ search functionality
- All services are networked via Docker Compose (`cfafsnet`)

### Key Components & Pages

**Frontend Pages** (all in `src/app/`):
- Landing page (`page.tsx`)
- About, Loans, Membership, Contact
- Board Members, Executive Leadership Team
- Careers, News/Press, FAQ
- Account Login, Registration

**Backend Models**:
- `PressRelease` - News/press content
- `FAQQuery`/`FAQResponse` - Semantic search
- `RegisterRequest` - User registration

## Development Workflow

### Adding New Pages
1. Create new directory in `frontend/src/app/[page-name]/`
2. Add `page.tsx` file with React component
3. Update navigation in `layout.tsx` if needed
4. Follow existing component patterns

### Adding New API Endpoints
1. Add new models to `backend/main.py`
2. Implement CRUD operations following existing patterns
3. Add CORS configuration if needed
4. Test via FastAPI docs at `/docs`

### Working with AI Services
- FAQ data stored in `faq/data/*.md` files
- Weaviate schema auto-initialized on backend startup
- Test semantic search via `/faq/search` endpoint

### Styling Guidelines
- Use Tailwind CSS v4 classes
- Follow design system from `CFAFS-UI-Handbook.md`:
  - Primary: Fern Green (#4F7942)
  - Secondary: Sky Blue (#5CA4EA) 
  - Accent: Goldenrod (#FFC857)
  - Typography: Montserrat (headings), Lato (body)

## Environment Configuration

### Development Environment Variables
- `NEXT_PUBLIC_API_URL=http://backend:8000` (Frontend)
- `WEAVIATE_URL=http://faq:8080` (Backend)
- `FRONTEND_ORIGIN=http://localhost:3000` (Backend CORS)

### Port Mappings
- Frontend: `localhost:3000`
- Backend API: `localhost:8000`
- Chatbot: `localhost:3001` 
- FAQ/Weaviate: `localhost:8080`
- Transformers: `localhost:8082`

## Known Architecture Patterns

### Component Structure
Components follow a hierarchical pattern:
- Layout components (`NavToggle`, `DropdownMenu`, `Footer`)
- Page-specific components 
- Reusable UI components (buttons, cards, forms)

### API Design
- RESTful endpoints with proper HTTP status codes
- Pydantic models for request/response validation
- FastAPI automatic documentation generation
- Consistent error handling with HTTPException

### State Management
- Next.js App Router for routing
- React 19 features for component state
- No external state management library (Redux/Zustand) currently used

## Development Priority Areas

Based on the current public/private architecture:

1. **Public Section Completion** - Finish all public-facing pages
2. **Authentication System** - Implement secure member login for private section
3. **Member Portal Development** - Build private member dashboard and tools
4. **Database Integration** - Replace in-memory storage with production database
5. **API Security** - Implement proper authentication and authorization

## File Structure Patterns

```
frontend/src/
  app/                    # Next.js App Router pages
    [page-name]/
      page.tsx           # Page component
    layout.tsx           # Root layout with navigation
  components/            # Reusable components
    
backend/
  main.py               # Single FastAPI application file
  requirements.txt      # Python dependencies
  
faq/data/              # FAQ knowledge base markdown files
```

## Design System Integration

When implementing new features, reference the complete design specifications in `CFAFS-UI-Handbook.md` for:
- Color palette usage
- Typography hierarchy  
- Component design patterns
- Responsive breakpoints
- Animation guidelines
