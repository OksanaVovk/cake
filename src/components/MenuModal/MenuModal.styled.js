import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';
export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 375px;
  height: 100%;
  background-color: ${p => p.theme.mainColors.brown};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ModalSvg = styled('svg')`
  width: 32px;
  height: 32px;
  fill: ${p => p.theme.secondaryColors.white};
  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const ModalButton = styled('button')`
  position: absolute;
  top: 40px;
  right: 24px;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
`;

export const Img = styled('img')`
  position: absolute;
  top: 364px;
  left: 85px;
  width: 206px;
  height: 216px;
`;

export const Link = styled(HashLink)`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  text-transform: uppercase;
  color: ${p => p.theme.mainColors.grey};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.mainColors.accent};
  ';
`;

export const LinkItem = styled('li')`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const List = styled('ul')`
  position: absolute;
  top: 140px;
  left: 40px;
`;
