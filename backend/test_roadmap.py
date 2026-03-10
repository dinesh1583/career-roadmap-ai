from ai_engine.roadmap_generator import generate_roadmap

missing_skills = [
    "deep learning",
    "tensorflow",
    "statistics"
]

roadmap = generate_roadmap(missing_skills)

for step in roadmap:
    print(step)