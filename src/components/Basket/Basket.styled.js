import styled from '@emotion/styled';

export const BasketSvg = styled.svg`
  width: 25px;
  height: 25px;
  fill: ${p => p.theme.mainColors.brown};
  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: scale(1.3);
  }
  }
`;
