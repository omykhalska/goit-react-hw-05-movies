import { Wrapper, Card, ImgBox, Img, Name, Character } from './Cast.styled';

export function Cast({ data }) {
  return (
    <Wrapper>
      {data.map(({ key, character, name, photo }) => (
        <Card key={key}>
          <ImgBox>
            <Img src={photo} alt={name} />
          </ImgBox>
          <div>
            <Name>{name}</Name>
            <p>
              <Character>Character: </Character>
              {character}
            </p>
          </div>
        </Card>
      ))}
    </Wrapper>
  );
}
