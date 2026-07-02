import pandas as pd
import ast
import pickle

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load datasets
movies = pd.read_csv("dataset/movies.csv")
credits = pd.read_csv("dataset/credits.csv")

# Merge datasets
movies = movies.merge(credits, on="title")

# Keep only required columns
movies = movies[
    [
        "movie_id",
        "title",
        "overview",
        "genres",
        "keywords",
        "cast",
        "crew",
        "release_date",
        "runtime",
        "vote_average",
        "vote_count",
        "popularity"
    ]
]
movies.dropna(inplace=True)


# -------------------------------
# Helper Functions
# -------------------------------

def convert(text):
    result = []
    for i in ast.literal_eval(text):
        result.append(i["name"])
    return result


def convert3(text):
    result = []
    counter = 0

    for i in ast.literal_eval(text):
        if counter != 3:
            result.append(i["name"])
            counter += 1
        else:
            break

    return result


def fetch_director(text):
    result = []

    for i in ast.literal_eval(text):
        if i["job"] == "Director":
            result.append(i["name"])
            break

    return result


# Convert JSON strings
movies["genres"] = movies["genres"].apply(convert)
movies["keywords"] = movies["keywords"].apply(convert)
movies["cast"] = movies["cast"].apply(convert3)
movies["crew"] = movies["crew"].apply(fetch_director)

movies["overview"] = movies["overview"].apply(lambda x: x.split())

# Remove spaces from names
for feature in ["genres", "keywords", "cast", "crew"]:
    movies[feature] = movies[feature].apply(
        lambda x: [i.replace(" ", "") for i in x]
    )

# Create tags
movies["tags"] = (
    movies["overview"]
    + movies["genres"]
    + movies["keywords"]
    + movies["cast"]
    + movies["crew"]
)

new_df = movies[
    [
        "movie_id",
        "title",
        "overview",
        "genres",
        "tags",
        "release_date",
        "runtime",
        "vote_average",
        "vote_count",
        "popularity"
    ]
]

new_df["tags"] = new_df["tags"].apply(lambda x: " ".join(x))
new_df["tags"] = new_df["tags"].str.lower()

# TF-IDF
vectorizer = TfidfVectorizer(stop_words="english")

vectors = vectorizer.fit_transform(new_df["tags"])

similarity = cosine_similarity(vectors)

# Save files
pickle.dump(new_df, open("models/movies.pkl", "wb"))
pickle.dump(similarity, open("models/similarity.pkl", "wb"))
pickle.dump(vectorizer, open("models/vectorizer.pkl", "wb"))

print("=====================================")
print("MovieVerse AI Model Created Successfully")
print("Movies:", len(new_df))
print("Similarity Shape:", similarity.shape)
print("=====================================")