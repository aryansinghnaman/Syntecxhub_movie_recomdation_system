# 🎬 MovieVerse AI

<div align="center">

### 🤖 AI-Powered Movie Recommendation System

Discover movies similar to your favorites using **Machine Learning**, **TF-IDF Vectorization**, and **Cosine Similarity**.

🌐 **Live Demo:** https://syntecxhub-movie-recomdation-system.onrender.com

</div>

---

## 📌 Overview

MovieVerse AI is a content-based movie recommendation system that intelligently recommends similar movies based on genres, overview, keywords, cast, and director.

The recommendation engine uses **TF-IDF Vectorization** and **Cosine Similarity** to analyze movie metadata and instantly generate personalized recommendations through a modern, responsive web interface.

---

# ✨ Features

- 🤖 AI-powered Movie Recommendations
- 🎯 Content-Based Recommendation System
- 🧠 TF-IDF Vectorization
- 📊 Cosine Similarity Algorithm
- 🔍 Live Movie Search
- ⚡ Instant Recommendations (AJAX)
- 🎨 Modern Glassmorphism UI
- ✨ Animated Interface
- 📱 Fully Responsive Design
- 🌙 Dark / Light Theme
- 🎭 Genre Information
- 📅 Movie Release Year
- ⭐ Movie Rating
- ⏱ Runtime Information
- 📈 AI Match Percentage

---

# 🧠 Machine Learning Workflow

1. Load TMDB Movie Dataset
2. Merge Movie & Credits Dataset
3. Data Cleaning
4. Feature Engineering
5. Create Movie Tags
6. TF-IDF Vectorization
7. Compute Cosine Similarity
8. Generate Recommendations
9. Display Results through Flask API

---

# 🛠 Tech Stack

## Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- TF-IDF Vectorizer
- Cosine Similarity

## Backend

- Flask
- Gunicorn

## Frontend

- HTML5
- CSS3
- JavaScript
- Font Awesome

## Dataset

- TMDB 5000 Movies Dataset

## Deployment

- Render

---

# 📂 Project Structure

```
MovieVerse-AI/
│
├── app.py
├── model.py
├── recommender.py
├── requirements.txt
├── runtime.txt
│
├── dataset/
│   ├── movies.csv
│   └── credits.csv
│
├── models/
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/
│   └── index.html
│
└── README.md
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/aryansinghnaman/Syntecxhub_movie_recomdation_system.git
```

Move into the project

```bash
cd Syntecxhub_movie_recomdation_system
```

Create a virtual environment

```bash
python -m venv .venv
```

Activate the virtual environment

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Generate the ML model

```bash
python model.py
```

Run the application

```bash
python app.py
```

Open your browser

```
http://127.0.0.1:5000
```

---

# 📊 Dataset

The project uses the **TMDB 5000 Movies Dataset**, containing:

- Movie Title
- Genres
- Overview
- Keywords
- Cast
- Crew
- Release Date
- Ratings
- Popularity

---

# 🔬 Recommendation Algorithm

MovieVerse AI uses a **Content-Based Filtering** approach.

The recommendation engine compares:

- Genres
- Keywords
- Movie Overview
- Top Cast
- Director

These features are transformed into vectors using **TF-IDF**, and similarity is calculated using **Cosine Similarity** to recommend the most relevant movies.

---

# 🌐 Live Demo

https://syntecxhub-movie-recomdation-system.onrender.com

---

# 📸 Screenshots

> Add screenshots here after submission.

Example:

```
screenshots/home.png
screenshots/search.png
screenshots/recommendations.png
screenshots/darkmode.png
```

---

# 🔮 Future Improvements

- 🎬 Movie Posters
- 🎥 Movie Trailers
- ❤️ Favorites
- 🔥 Trending Movies
- 👤 User Authentication
- ☁ Cloud Database
- 🤖 Hybrid Recommendation System

---

# 👨‍💻 Developer

## Aryan Singh

**B.Tech Computer Science & Engineering (Cyber Security)**

Central University of Jammu

### Connect with Me

**GitHub**

https://github.com/aryansinghnaman

**LinkedIn**

https://www.linkedin.com/in/aryansingh9557

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It motivates me to build more AI and Machine Learning projects.

---

# 📜 License

This project is developed for educational, learning, and portfolio purposes.
