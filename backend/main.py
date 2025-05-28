from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

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

