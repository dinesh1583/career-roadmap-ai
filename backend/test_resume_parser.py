from ai_engine.resume_parser import parse_resume
from ai_engine.skill_extractor import extract_skills

# Path to resume file
resume_file = "backend/John Doe.pdf"

# Extract text from resume
resume_text = parse_resume(resume_file)

# Extract skills from text
skills = extract_skills(resume_text)

print("Detected Skills:")
print(skills)