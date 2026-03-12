import pandas as pd


def generate_career_path(career):

    data = pd.read_csv("dataset/career_paths.csv")

    row = data[data["career"] == career]

    if row.empty:
        return []

    path_text = row.iloc[0]["skill_order"]

    path = path_text.split(">")

    return {
        "career": career,
        "path": path
    }