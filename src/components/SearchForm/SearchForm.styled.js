import styled from 'styled-components';

export const Input = styled.input`
  width: 250px;
  outline: none;
  border: 1.5px solid red;
  border-radius: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 15px;
  padding: 10px;
`;

export const SearchBtn = styled.button`
  border: 20px;
  color: black;
  background-color: transparent;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;

  &:hover,
  &:focus {
    color: white;
    background-color: red;
    border-radius: 20px;
  }
`;
