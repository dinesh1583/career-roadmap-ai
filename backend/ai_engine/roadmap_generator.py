def generate_roadmap(missing_skills):

    roadmap = []

    month = 1

    for skill in missing_skills:

        step = {
            "phase": f"Month {month}-{month+1}",
            "goal": f"Learn {skill}",
            "tasks": [
                f"Study fundamentals of {skill}",
                f"Watch tutorials about {skill}",
                f"Build a small project using {skill}"
            ]
        }

        roadmap.append(step)

        month += 2

    return roadmap