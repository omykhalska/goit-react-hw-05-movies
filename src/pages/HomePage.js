import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../services';
import { PageTitle } from '../components/PageTitle';
import { MoviesList } from '../components/MoviesList';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import imgPlaceholder from '../images/no-poster-available.png';

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
      <PageTitle text="Trending today" center />
      {loading && <Loader />}
      {!error && <MoviesList movies={movies} />}
      {error && <ErrorMessage />}
    </>
  );
}
