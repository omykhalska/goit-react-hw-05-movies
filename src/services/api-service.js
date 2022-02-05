import axios from 'axios';

const API_KEY = 'fb9aa05e2f4881c9f340e82eff5a7b0a';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularMovies() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  const { data } = await axios(url);
  return data;
}

export async function fetchMovieById(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  const { data } = await axios(url);
  return data;
}
