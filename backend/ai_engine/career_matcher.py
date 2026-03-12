import pandas as pd


def match_career(user_skills):

    data = pd.read_csv("dataset/careers.csv")

    best_match = None
    best_score = 0

    for _, row in data.iterrows():

        career = row["career"]
        career_skills = row["skills"].lower().split()

        match_count = 0

        for skill in user_skills:
            if skill in career_skills:
                match_count += 1

        score = match_count / len(career_skills)

        if score > best_score:
            best_score = score
            best_match = career

    return best_match, round(best_score * 100, 2)