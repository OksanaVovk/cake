import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled('nav')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    width: 287px;
    justify-content: space-between;
    margin-left: 170px;
    margin-right: 76px;
  }
`;

export const Link = styled(NavLink)`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;

  color: #705a66;
`;
