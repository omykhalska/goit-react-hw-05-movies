import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px;
  display: inline-block;
  outline: none;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
  background: #fafafa;
  color: black;
  transition: all 500ms ease-in-out;

  &:hover {
    background: tomato;
    color: white;
  }
`;
