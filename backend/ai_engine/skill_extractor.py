def extract_skills(resume_text):

    skills_database = [
        "python",
        "java",
        "sql",
        "machine learning",
        "data analysis",
        "deep learning",
        "pandas",
        "numpy",
        "tensorflow",
        "pytorch",
        "react",
        "nodejs",
        "html",
        "css",
        "javascript",
        "mongodb",
        "aws",
        "docker",
        "kubernetes",
        "tableau",
        "powerbi"
    ]

    detected_skills = []

    resume_text = resume_text.lower()

    for skill in skills_database:
        if skill in resume_text:
            detected_skills.append(skill)

    return detected_skills