import { Outlet, Link, useParams } from 'react-router-dom';
import { CardWrapper, ImgBox, Img } from './MovieDetails.styled';
import { PageTitle } from '../PageTitle';

export function MovieDetails({ details }) {
  const { title, desc, img, year, votes, genres } = details;
  let { movieId } = useParams();

  return (
    <>
      <CardWrapper>
        <ImgBox>
          <Img src={img} alt={title} />
        </ImgBox>
        <div>
          <PageTitle text={`${title} (${year})`} />
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
