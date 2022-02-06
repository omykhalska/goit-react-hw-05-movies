import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../services';
import { MoviesList } from '../components/MoviesList';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchPopularMovies()
      .then(data => {
        const movies = data.results.map(({ id, title }) => ({ id, title }));
        setMovies(movies);
      })
      .catch(({ message }) => setError(message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {!error && <MoviesList movies={movies} />}
      {error && <ErrorMessage />}
    </>
  );
}
