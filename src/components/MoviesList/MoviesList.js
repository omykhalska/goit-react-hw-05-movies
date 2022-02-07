import { Wrapper, Card, CardLink, Img, Title } from './MoviesList.styled';

export function MoviesList({ movies }) {
  return (
    <Wrapper>
      {movies.map(({ id, title, poster }) => (
        <Card key={id}>
          <CardLink to={`/movies/${id}`}>
            <Img src={poster} alt={title} />
            <Title>{title}</Title>
          </CardLink>
        </Card>
      ))}
    </Wrapper>
  );
}
