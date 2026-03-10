import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer

# Load careers dataset
data = pd.read_csv("dataset/careers.csv")

skills_text = data["skills"].dropna().str.lower().tolist()

# Use n-grams to detect phrases
vectorizer = TfidfVectorizer(
    ngram_range=(1,3),     # detect 1-word, 2-word, 3-word phrases
    stop_words="english"
)

X = vectorizer.fit_transform(skills_text)

skills = vectorizer.get_feature_names_out()

skills_df = pd.DataFrame(skills, columns=["skill"])

skills_df.to_csv("dataset/skills.csv", index=False)

print("Skills dataset created automatically!")
print("Total skills extracted:", len(skills_df))