from fastapi import FastAPI

from backend.ai_engine.resume_parser import parse_resume
from backend.ai_engine.skill_extractor import extract_skills
from backend.ai_engine.career_matcher import match_career
from backend.ai_engine.skill_gap import find_skill_gap
from backend.ai_engine.roadmap_generator import generate_roadmap
from backend.ai_engine.course_recommender import recommend_courses
from backend.ai_engine.project_recommender import recommend_projects
from backend.ai_engine.career_visualizer import generate_career_path


app = FastAPI()


@app.get("/")
def home():
    return {"message": "AI Career Roadmap API Running"}


@app.post("/analyze_resume/")
def analyze_resume(file_path: str):

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