import styled from '@emotion/styled/macro';
import { theme } from 'components/Theme';

export const ButtonTextBox = styled('div')`
  position: relative;
  display: grid;
  place-content: center;
  width: 276px;
  height: 67px;
`;

export const SvgBox = styled('div')`
  position: absolute;
  top: 0;
  left: 233px;
  display: none;
  // display: flex;
  width: 67px;
  height: 67px;
  align-items: center;
  justify-content: center;
  background: ${theme.mainColors.brown};
  border-radius: 50%;
`;

export const SvgMore = styled('svg')`
  width: 41px;
  height: 41px;
  fill: ${theme.mainColors.beige};
`;

export const StyledButton = styled('button')`
  display: grid;
  place-content: center;
  width: ${({ width }) => width || '276px'};
  height: ${({ height }) => height || '67px'};
  line-height: 29.26px;
  letter-spacing: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  border-radius: ${({ radius }) => radius || '10px'};
  color: ${({ color }) => color || '#705A66'};
  font-size: ${({ font }) => font || '24px'};
  background: ${({ bg }) => bg || '#F5EEE0'};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;

export const ButtonMoreB = styled(StyledButton)`
  font-size: 18px;

  &:focus ${SvgBox} {
    display: flex;
  }

  &:hover ${SvgBox} {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;
