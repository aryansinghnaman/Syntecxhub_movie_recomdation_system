import pickle

movies = pickle.load(open("models/movies.pkl", "rb"))

print(movies.columns.tolist())