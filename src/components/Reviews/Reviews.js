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
