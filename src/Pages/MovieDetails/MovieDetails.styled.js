import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 20px;
`;

export const Main = styled.main`
  margin-top: 20px;
`;

export const NavItem = styled.li`
  margin-bottom: 30px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  margin-top: 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
    background-color: red;
  }
`;
