import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../services';
import { Loader } from '../components/Loader';
import { Cast } from '../components/Cast';
import imgPlaceholder from '../images/no-image.png';

export function CastPage() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchMovieCredits(movieId)
      .then(({ cast }) => {
        const castDetails = cast.map(
          ({ cast_id, character, name, profile_path }) => ({
            key: cast_id,
            name,
            character,
            photo: profile_path
              ? 'https://image.tmdb.org/t/p/w500' + profile_path
              : imgPlaceholder,
          }),
        );
        setCast(castDetails);
      })
      .catch(({ message }) => setError(message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!error && <Cast data={cast} />}
      {error && <h2>Something went wrong...</h2>}
    </>
  );
}
