import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

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

export const Link = styled(HashLink)`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  color: ${p => p.theme.mainColors.brown};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.mainColors.accent};
  }
`;
