import styled from '@emotion/styled';

export const ItemBox = styled('li')`
  display: grid;
  grid-template-columns: 175px 80px 20px;
  grid-column-gap: 20px;
  margin-bottom: 15px;
  @media screen and (min-width: 1440px) {
    grid-template-columns: 233px 100px 20px;
    grid-column-gap: 30px;
  }
`;

export const Text = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  line-height: 17.24px;
  color: ${p => p.theme.mainColors.brown};
`;

export const DeleteSvg = styled('svg')`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.mainColors.brown};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: ${p => p.theme.mainColors.accent};
  }
`;

export const DeleteButton = styled('button')`
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
`;
