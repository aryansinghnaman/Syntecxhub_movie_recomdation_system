import pickle
import pandas as pd

movies = pickle.load(open("models/movies.pkl", "rb"))
similarity = pickle.load(open("models/similarity.pkl", "rb"))


def recommend(movie_name):

    movie_name = movie_name.lower()

    index = None

    for i, title in enumerate(movies["title"]):

        if title.lower() == movie_name:
            index = i
            break

    if index is None:
        return []

    distances = list(enumerate(similarity[index]))

    movie_list = sorted(
        distances,
        reverse=True,
        key=lambda x: x[1]
    )[1:7]

    recommendations = []

    for movie in movie_list:

        m = movies.iloc[movie[0]]

        recommendations.append({

            "title": m["title"],

            "overview": " ".join(m["overview"][:35]) + "...",

            "genres": ", ".join(m["genres"][:3]),

            "confidence": round(movie[1] * 100),

            "release_date": str(m["release_date"])[:4],

            "runtime": int(m["runtime"]) if not pd.isna(m["runtime"]) else "N/A",

            "vote_average": round(float(m["vote_average"]), 1),

            "vote_count": int(m["vote_count"]),

            "popularity": round(float(m["popularity"]), 1)

        })

    return recommendations