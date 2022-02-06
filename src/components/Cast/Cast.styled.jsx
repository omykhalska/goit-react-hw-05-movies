import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const ImgBox = styled.div`
  height: 180px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-weight: 700;
  text-align: center;
`;

export const Character = styled.span`
  font-weight: 700;
`;
