import styled from 'styled-components';

export const Form = styled.form`
  margin: 24px auto;
  display: flex;
  align-items: center;
  max-width: 600px;
  background-color: #fff;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  padding: 5px;
  border: 3px solid #333;
  border-right: none;
  border-radius: 4px 0 0 4px;
  outline: none;
  font-size: 20px;
  color: black;

  &::placeholder {
    font-size: 18px;
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  border: 1px solid #333;
  border-radius: 0 5px 5px 0;
  outline: none;
  background: #333;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;
