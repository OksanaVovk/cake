import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavStyled = styled('nav')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 288px;
    margin-right: 275px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  color: ${p => p.theme.mainColors.brown};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.mainColors.accent};
  ';
`;
