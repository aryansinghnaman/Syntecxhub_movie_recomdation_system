from flask import Flask, render_template, request, jsonify
from recommender import recommend, movies

app = Flask(__name__)

# Movie titles for autocomplete
movie_list = sorted(movies["title"].tolist())


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/recommend", methods=["POST"])
def get_recommendations():

    data = request.get_json()

    movie = data.get("movie", "").strip()

    recommendations = recommend(movie)

    return jsonify(recommendations)


# Autocomplete API
@app.route("/movies")
def get_movies():
    return jsonify(movie_list)


if __name__ == "__main__":
    app.run(debug=True)