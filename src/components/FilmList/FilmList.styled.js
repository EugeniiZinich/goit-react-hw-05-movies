import styled from 'styled-components';

export const FilmListInner = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FilmItem = styled.li`
  flex-basis: calc((100% - 60px) / 4);
  width: 100%;
  border-radius: 5px;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 26px -1px rgba(59, 15, 232, 0.56);
    -webkit-box-shadow: 0px 0px 26px -1px rgba(59, 15, 232, 0.56);
    -moz-box-shadow: 0px 0px 26px -1px rgba(59, 15, 232, 0.56);
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
