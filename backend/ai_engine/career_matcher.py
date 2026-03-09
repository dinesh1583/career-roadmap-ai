import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def recommend_career(user_skills):

    # Load careers dataset
    data = pd.read_csv("dataset/careers.csv")

    # Get skills column
    career_skills = data["skills"].tolist()

    # Combine dataset skills with user skills
    documents = career_skills + [" ".join(user_skills)]

    # Convert text to TF-IDF vectors
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(documents)

    # Calculate cosine similarity
    similarity = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])

    # Find best matching career
    best_index = similarity.argmax()

    best_career = data.iloc[best_index]["career"]
    score = similarity[0][best_index]

    return best_career, round(score * 100, 2)