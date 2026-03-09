from ai_engine.resume_parser import parse_resume
from ai_engine.skill_extractor import extract_skills
from ai_engine.career_matcher import recommend_career

resume_file = "backend/John Doe.pdf"

# Extract resume text
resume_text = parse_resume(resume_file)

# Extract skills
skills = extract_skills(resume_text)

# Recommend career
career, score = recommend_career(skills)

print("Detected Skills:", skills)
print("Recommended Career:", career)
print("Match Score:", score, "%")