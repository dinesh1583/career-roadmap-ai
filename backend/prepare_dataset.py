import pandas as pd

# Load dataset
data = pd.read_csv("dataset/job_descriptions.csv")

# Select important columns
data = data[["Job Title", "skills"]]

# Rename columns
data.columns = ["career", "skills"]

# Remove missing values
data = data.dropna()

# Remove duplicates
data = data.drop_duplicates()

# Convert text to lowercase
data["career"] = data["career"].str.lower()
data["skills"] = data["skills"].str.lower()

print("Rows after cleaning:", len(data))

# Sample dataset safely
sample_size = min(5000, len(data))
data = data.sample(sample_size)

# Save cleaned dataset
data.to_csv("dataset/careers.csv", index=False)

print("Clean dataset created successfully!")
print("Total rows saved:", sample_size)