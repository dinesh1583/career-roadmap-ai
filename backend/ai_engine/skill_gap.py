import pandas as pd


def find_skill_gap(career, user_skills):

    careers = pd.read_csv("dataset/careers.csv")
    skills_data = pd.read_csv("dataset/skills.csv")

    skill_database = skills_data["skill"].tolist()

    career_row = careers[careers["career"] == career]

    if career_row.empty:
        return []

    career_skills_text = career_row.iloc[0]["skills"].lower()

    career_skills = []

    for skill in skill_database:
        if skill in career_skills_text:
            career_skills.append(skill)

    user_skills = [skill.lower() for skill in user_skills]

    missing_skills = []

    for skill in career_skills:
        if skill not in user_skills:
            missing_skills.append(skill)

    return missing_skills