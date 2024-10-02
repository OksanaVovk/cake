import styled from '@emotion/styled';

export const BasketBox = styled('nav')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled('button')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
`;

export const BasketSvg = styled.svg`
  width: 25px;
  height: 25px;
  fill: ${p => p.theme.mainColors.brown};
  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;
export const Text = styled('p')`
  font-family: Montserrat Bold, sans-serif;
  font-weight: 800;
  text-align: left;
  font-size: 14px;
  line-height: 14px;
`;

export const TextCircle = styled('p')`
  font-family: Montserrat Bold, sans-serif;
  font-weight: 800;
  text-align: left;
  font-size: 12px;
  line-height: 12px;
  color: white;
`;

export const CircleBox = styled('div')`
  position: absolute;
  top: -6px;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => p.theme.mainColors.accent};
`;
