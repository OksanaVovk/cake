import styled from '@emotion/styled';

export const MenuButton = styled('button')`
  display: grid;
  place-content: center;
  cursor: pointer;
  margin-left: 40px;
  margin-right: 20px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MenuSvg = styled('svg')`
  width: 42px;
  height: 37px;
`;
