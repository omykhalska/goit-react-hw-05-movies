//TODO: компонент OnError

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from '../services';
import { Loader } from '../components/Loader';
import { MovieDetails } from '../components/MovieDetails';
import { ErrorMessage } from '../components/ErrorMessage';

export function MovieDetailsPage() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchMovieById(movieId)
      .then(
        ({
          title,
          overview,
          poster_path,
          release_date,
          vote_average,
          genres,
        }) => {
          const details = {
            title,
            desc: overview,
            img: 'https://image.tmdb.org/t/p/w500' + poster_path,
            year: release_date.slice(0, 4),
            votes: vote_average * 10,
            genres: genres.map(genre => genre.name).join(', '),
          };
          setDetails(details);
        },
      )
      .catch(({ message }) => setError(message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!error && <MovieDetails details={details} />}
      {error && <ErrorMessage />}
    </>
  );
}
