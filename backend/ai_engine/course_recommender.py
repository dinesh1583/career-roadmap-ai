import pandas as pd


def recommend_courses(missing_skills):

    courses_data = pd.read_csv("dataset/courses.csv")

    recommendations = []

    for skill in missing_skills:

        matched_courses = courses_data[courses_data["skill"] == skill]

        for _, row in matched_courses.iterrows():

            recommendations.append({
                "skill": skill,
                "course": row["course"],
                "link": row["link"]
            })

    return recommendations