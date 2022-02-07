import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesBySearch } from '../services';
import { MoviesList } from '../components/MoviesList';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { SearchBar } from '../components/SearchBar';
import imgPlaceholder from '../images/no-poster-available.png';

export function MoviesPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      toast.info('Type a search keyword...');
      return;
    }

    if (query) {
      setLoading(true);

      fetchMoviesBySearch(query)
        .then(({ results }) => {
          if (results.length === 0) {
            toast.info('No movies found! Try another search keyword.');
            return;
          }
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
    }
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value.trim() });
  }

  return (
    <>
      <SearchBar onFormSubmit={handleSubmit} />
      {loading && <Loader />}
      {!error && query && <MoviesList movies={movies} />}
      {error && <ErrorMessage />}
      <ToastContainer position="top-center" />
    </>
  );
}
