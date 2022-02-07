import { Outlet, Link, useParams } from 'react-router-dom';
import { CardWrapper, ImgBox, Img } from './MovieDetails.styled';
import { PageTitle } from '../PageTitle';

export function MovieDetails({ details }) {
  const { title, desc, img, year, votes, genres } = details;
  let { movieId } = useParams();

  return (
    <>
      <PageTitle text={`${title} (${year})`} />
      <CardWrapper>
        <ImgBox>
          <Img src={img} alt={title} />
        </ImgBox>
        <div>
          <p>User Score: {votes}%</p>
          <h2>Overview</h2>
          <p>{desc}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </CardWrapper>
      <hr />
      <b>Additional information</b>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
