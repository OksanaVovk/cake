import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled('nav')`
  display: flex;
  flex-direction: row;
  width: 287px;
  justify-content: space-between;
  margin-left: 170px;
  margin-right: 76px;

  //   position: relative;

  //   @media screen and (min-width: 1280px) {
  //     &::before {
  //       content: '';
  //       top: 57px;
  //       left: -36px;
  //       width: 32px;
  //       rotate: 90deg;
  //       position: absolute;
  //       border-bottom: 2px solid #e0e0e0;
  //     }
  //   }

  //   @media screen and (min-width: 768px) {
  //     padding-top: 17px;
  //   }

  //   @media screen and (min-width: 1280px) {
  //     padding-top: 52px;
  //     margin-left: 40px;
  //   }
`;

export const Link = styled(NavLink)`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;

  color: #705a66;
`;
