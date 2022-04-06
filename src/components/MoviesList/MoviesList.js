import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Card,
  CardLink,
  Img,
  Title,
  LoadMoreBtn,
} from './MoviesList.styled';

export function MoviesList({
  movies,
  handleLoadMoreBtn = null,
  isLastPage = true,
}) {
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
        <LoadMoreBtn type="button" onClick={handleLoadMoreBtn}>
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleLoadMoreBtn: PropTypes.func,
  isLastPage: PropTypes.bool,
};
