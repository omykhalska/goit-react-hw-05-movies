import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../services';
import { Title } from '../components/Title';
import { MoviesList } from '../components/MoviesList';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import imgPlaceholder from '../images/no-image.png';

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchPopularMovies()
      .then(({ results }) => {
        const movies = results.map(({ id, title, poster_path }) => ({
          id,
          title,
          poster: poster_path
            ? 'https://image.tmdb.org/t/p/w500' + poster_path
            : imgPlaceholder,
        }));
        setMovies(movies);
      })
      .catch(({ message }) => setError(message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Title text="Trending today" />
      {loading && <Loader />}
      {!error && <MoviesList movies={movies} />}
      {error && <ErrorMessage />}
    </>
  );
}
