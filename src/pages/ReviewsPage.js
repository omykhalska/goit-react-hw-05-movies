import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services';
import { Loader } from '../components/Loader';
import { Reviews } from '../components/Reviews';
import { ErrorMessage } from '../components/ErrorMessage';

export function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchMovieReviews(movieId)
      .then(({ results }) => {
        const reviewsArr = results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
        setReviews(reviewsArr);
      })
      .catch(({ message }) => setError(message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!error && <Reviews reviews={reviews} />}
      {error && <ErrorMessage />}
    </>
  );
}
