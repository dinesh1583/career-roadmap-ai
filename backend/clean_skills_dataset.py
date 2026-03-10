import pandas as pd

skills_df = pd.read_csv("dataset/skills.csv")

skills = skills_df["skill"].tolist()

clean_skills = []

for skill in skills:

    words = skill.split()

    # Rule 1: remove phrases longer than 3 words
    if len(words) > 3:
        continue

    # Rule 2: remove very short tokens
    if any(len(word) < 3 for word in words):
        continue

    # Rule 3: remove duplicated words
    if len(words) != len(set(words)):
        continue

    clean_skills.append(skill)

clean_skills = sorted(set(clean_skills))

clean_df = pd.DataFrame(clean_skills, columns=["skill"])

clean_df.to_csv("dataset/skills.csv", index=False)

print("Skills cleaned automatically!")
print("Remaining skills:", len(clean_df))