from ai_engine.resume_parser import parse_resume
from ai_engine.skill_extractor import extract_skills
from ai_engine.career_matcher import recommend_career
from ai_engine.skill_gap import find_skill_gap

resume_file = "backend/John Doe.pdf"

# Extract resume text
resume_text = parse_resume(resume_file)

# Extract user skills
skills = extract_skills(resume_text)

# Recommend career
career, score = recommend_career(skills)

# Find missing skills
missing_skills = find_skill_gap(career, skills)

print("Detected Skills:", skills)
print("Recommended Career:", career)
print("Match Score:", score, "%")

print("\nMissing Skills:")
print(missing_skills)