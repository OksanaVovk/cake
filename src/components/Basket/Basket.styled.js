import styled from '@emotion/styled';

export const BasketSvg = styled.svg`
  width: 25px;
  height: 25px;
  fill: ${p => p.theme.mainColors.brown};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: ${p => p.theme.mainColors.accent};
  }
`;
