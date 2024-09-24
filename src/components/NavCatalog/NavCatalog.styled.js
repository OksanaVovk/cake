import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const NavCatalogListBox = styled('ul')`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 23px;
  }
`;
export const NavCatalogItemBox = styled('li')`
  display: flex;
  flex-direction: row;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 14px;
  line-height: 14px;
`;

export const NavCatalogText = styled('p')`
  margin-left: 4px;
  margin-right: 4px;
`;

export const LinkNav = styled(Link)`  
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.mainColors.accent};
  `;
