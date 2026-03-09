import pandas as pd

# Correct path to dataset
data = pd.read_csv("dataset/job_descriptions.csv")

print("First 5 rows:\n")
print(data.head())

print("\nColumns:\n")
print(data.columns)

print("\nTotal rows:")
print(len(data))