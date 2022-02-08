import PropTypes from 'prop-types';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { CardWrapper, ImgBox, Img, Title } from './MovieDetails.styled';
import { GoBackButton } from '../GoBackButton';

export function MovieDetails({ details }) {
  const { title, desc, img, year, votes, genres } = details;
  let { movieId } = useParams();
  const location = useLocation();

  return (
    <>
      <GoBackButton location={location} />
      <CardWrapper>
        <ImgBox>
          <Img src={img} alt={title} />
        </ImgBox>
        <div>
          <Title>
            {title} ({year})
          </Title>
          <p>User Score: {votes}</p>
          <h2>Overview</h2>
          <p>{desc}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </CardWrapper>
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            state={location?.state && { from: location.state.from }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={location?.state && { from: location.state.from }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}

MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    year: PropTypes.string,
    votes: PropTypes.string,
    genres: PropTypes.string,
  }).isRequired,
};
