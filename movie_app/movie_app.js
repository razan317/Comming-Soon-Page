const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getClassByRate = (vote) => {
  if (vote >= 7.5) return "green";
  else if (vote >= 7) return "yellow";
  else return "red";
};

const showMovies = (movies) => {
  main.innerHTML = "";
  if (movies.length === 0) {
    main.innerHTML = "<p>No results found. Try a different search.</p>";
    return;
  }
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
      <img src="${poster_path ? IMG_PATH + poster_path : 'movie_image/placeholder.png'}" alt="${title}" />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        <p>${overview}</p>
      </div>
    `;
    main.appendChild(movieElement);
  });
};

const getMovies = async (url) => {
  try {
    main.innerHTML = "<p>Loading...</p>";
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok.");
    const data = await res.json();
    console.log("res:", res);
    console.log("data:", data);
    showMovies(data.results);
  } catch (error) {
    console.error("Error fetching movies:", error);
    main.innerHTML = "<p>Something went wrong. Please try again later.</p>";
  }
};

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();
  if (searchTerm) {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
    carousel.style.display = "none"; 
  } else {
    getMovies(API_URL);
    carousel.style.display = "block"; 
  }
});

document.getElementById('sign-in-button').addEventListener('click', function() {
  window.location.href = 'signin.html';
});

document.getElementById('register-link').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'register.html';
});
