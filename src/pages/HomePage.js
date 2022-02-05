import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../services';
import { Loader } from '../components/Loader';

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

      {!error && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}

      {error && <h2>Something went wrong...</h2>}
    </>
  );
}
