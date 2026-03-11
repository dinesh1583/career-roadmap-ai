from ai_engine.project_recommender import recommend_projects

missing_skills = [
    "deep learning",
    "statistics"
]

projects = recommend_projects(missing_skills)

for project in projects:
    print(project)