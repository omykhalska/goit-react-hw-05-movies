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

const FIRST_PAGE = 1;

export function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const currentPage = Number(searchParams.get('page'));

  const [movies, setMovies] = useState([]);
  const [lastPage, setLastPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      toast.info('Type a search keyword...');
      return;
    }

    if (query) {
      currentPage === FIRST_PAGE && setMovies([]);
      setLoading(true);

      fetchMoviesBySearch(query, currentPage)
        .then(({ results, total_pages }) => {
          if (results.length === 0) {
            setLastPage(true);
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
          currentPage === FIRST_PAGE
            ? setMovies(movies)
            : setMovies(prevmovies => [...prevmovies, ...movies]);

          if (currentPage === total_pages) {
            setLastPage(true);
          }
        })
        .catch(({ message }) => setError(message))
        .finally(() => setLoading(false));
    }
  }, [query, currentPage]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({
      query: e.currentTarget.elements.query.value.trim(),
      page: FIRST_PAGE,
    });
    setLastPage(false);
  }

  function handleLoadMoreBtn() {
    const page = String(currentPage + 1);
    setSearchParams({ query, page });
  }

  return (
    <>
      <SearchBar onFormSubmit={handleSubmit} />
      {loading && <Loader />}
      {!error && query && (
        <MoviesList
          movies={movies}
          handleLoadMoreBtn={handleLoadMoreBtn}
          isLastPage={lastPage}
        />
      )}
      {error && <ErrorMessage />}
      <ToastContainer position="top-center" />
    </>
  );
}
