import pandas as pd


def recommend_projects(missing_skills):

    projects_data = pd.read_csv("dataset/projects.csv")

    recommendations = []

    for skill in missing_skills:

        matched_projects = projects_data[projects_data["skill"] == skill]

        for _, row in matched_projects.iterrows():

            recommendations.append({
                "skill": skill,
                "project": row["project"]
            })

    return recommendations