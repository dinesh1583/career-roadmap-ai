from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import AI modules
from backend.ai_engine.resume_parser import parse_resume
from backend.ai_engine.skill_extractor import extract_skills
from backend.ai_engine.career_matcher import match_career
from backend.ai_engine.skill_gap import find_skill_gap
from backend.ai_engine.roadmap_generator import generate_roadmap
from backend.ai_engine.course_recommender import recommend_courses
from backend.ai_engine.project_recommender import recommend_projects
from backend.ai_engine.career_visualizer import generate_career_path


app = FastAPI()


# ✅ CORS (IMPORTANT for frontend connection)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ✅ Home Route
@app.get("/")
def home():
    return {"message": "AI Career Roadmap API Running"}


# ✅ Main Resume Analysis API
@app.post("/analyze_resume/")
def analyze_resume(file_path: str):

    if not file_path:
        return {"error": "File path is required"}

    try:
        # Step 1: Parse Resume
        resume_text = parse_resume(file_path)

        # Step 2: Extract Skills
        skills = extract_skills(resume_text)

        # Step 3: Match Career
        career, score = match_career(skills)

        # Step 4: Skill Gap
        missing_skills = find_skill_gap(career, skills)

        # Step 5: Roadmap
        roadmap = generate_roadmap(missing_skills)

        # Step 6: Courses
        courses = recommend_courses(missing_skills)

        # Step 7: Projects
        projects = recommend_projects(missing_skills)

        # Step 8: Career Path Visualization
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