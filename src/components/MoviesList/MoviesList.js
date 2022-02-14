import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, Card, CardLink, Img, Title } from './MoviesList.styled';

export function MoviesList({ movies, handleLoadMoreBtn, isLastPage }) {
  const location = useLocation();

  return (
    <>
      <Wrapper>
        {movies.map(({ id, title, poster }) => (
          <Card key={id}>
            <CardLink to={`/movies/${id}`} state={{ from: location }}>
              <Img src={poster} alt={title} />
              <Title>{title}</Title>
            </CardLink>
          </Card>
        ))}
      </Wrapper>
      {!isLastPage && (
        <button type="button" onClick={handleLoadMoreBtn}>
          Load more
        </button>
      )}
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
