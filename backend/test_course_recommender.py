from ai_engine.course_recommender import recommend_courses

missing_skills = [
    "deep learning",
    "statistics"
]

courses = recommend_courses(missing_skills)

for course in courses:
    print(course)