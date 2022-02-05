//TODO: заглушки для фото, года, жанров, оценки

import { Outlet, Link, useParams } from 'react-router-dom';
import { Wrapper, CardWrapper, ImgBox, Img } from './MovieDetails.styled';

export function MovieDetails({ details }) {
  const { title, desc, img, year, votes, genres } = details;
  let { movieId } = useParams();

  return (
    <Wrapper>
      <CardWrapper>
        <ImgBox>
          <Img src={img} alt={title} />
        </ImgBox>
        <div>
          <h1>
            {title} ({year})
          </h1>
          <p>User Score: {votes}%</p>
          <h2>Overview</h2>
          <p>{desc}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </CardWrapper>
      <hr />
      <p>Additional information</p>
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
    </Wrapper>
  );
}
