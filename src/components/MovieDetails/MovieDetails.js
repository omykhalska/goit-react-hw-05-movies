//TODO: заглушки для фото, года, жанров, оценки

import { Outlet } from 'react-router-dom';
import { Wrapper, ImgBox, Img } from './MovieDetails.styled';

export function MovieDetails({ details }) {
  const { title, desc, img, year, votes, genres } = details;
  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <hr />
      <Outlet />
    </>
  );
}
