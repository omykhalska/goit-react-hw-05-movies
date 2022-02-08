import PropTypes from 'prop-types';

export function Reviews({ reviews }) {
  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <b>Author: {author}</b>
          <p>"{content}"</p>
        </li>
      ))}
    </ul>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};
