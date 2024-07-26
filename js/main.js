"use strict";

const API_KEY = 'd3918dd30b6c88c01ad263f7edd3c4bb';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
        const card = creatMovieCard(movie);
        movieContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));

function creatMovieCard(movie){
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <span>Rating: ${movie.vote_average}</span>
    `;
    card.addEventListener('click', ()=> alert (`movie id ${movie.id}`));
    return card;
}

document.getElementById('search-button').addEventListener('click', () => {
  let value = document.getElementById('search-input').value.toUpperCase();
  let titles = document.querySelectorAll('.movie-card');
  console.log(value)
  console.log(titles)
  titles.forEach(item => {
    const title = item.querySelector('h3').innerText.toUpperCase();
    console.log(title)
    if (title.includes(value)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
  event.preventDefault();
});