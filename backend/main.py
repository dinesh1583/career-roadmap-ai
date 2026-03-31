from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# AI modules
from backend.ai_engine.resume_parser import parse_resume
from backend.ai_engine.skill_extractor import extract_skills
from backend.ai_engine.career_matcher import match_career
from backend.ai_engine.skill_gap import find_skill_gap
from backend.ai_engine.roadmap_generator import generate_roadmap
from backend.ai_engine.course_recommender import recommend_courses
from backend.ai_engine.project_recommender import recommend_projects
from backend.ai_engine.career_visualizer import generate_career_path

# Auth
from backend.auth import router as auth_router

app = FastAPI()

# ✅ CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Auth routes
app.include_router(auth_router)

@app.get("/")
def home():
    return {"message": "API Running"}

@app.post("/analyze_resume/")
def analyze_resume(file_path: str):

    if not file_path:
        return {"error": "File path is required"}

    try:
        resume_text = parse_resume(file_path)
        skills = extract_skills(resume_text)
        career, score = match_career(skills)
        missing_skills = find_skill_gap(career, skills)
        roadmap = generate_roadmap(missing_skills)
        courses = recommend_courses(missing_skills)
        projects = recommend_projects(missing_skills)
        career_path = generate_career_path(career)

        return {
            "detected_skills": skills,
            "recommended_career": career,
            "match_score": score,
            "missing_skills": missing_skills,
            "roadmap": roadmap,
            "courses": courses,
            "projects": projects,
            "career_path": career_path
        }

    except Exception as e:
        return {"error": str(e)}