import styled from '@emotion/styled/macro';
import { theme } from 'components/Theme';
// import { theme } from 'components/Theme';

// export const StyledButton = styled('button')`
//   display: grid;
//   place-content: center;
//   // width: ${({ width }) => width || '276px'};
//   // height: ${({ height }) => height || '67px'};
//   // line-height: 29.26px;
//   // letter-spacing: 0.04em;
//   // font-weight: 300;
//   // border-radius: ${({ radius }) => radius || '10px'};
//   // border: 2px solid ${theme.colors.accent};
//   // color: ${({ color }) => color || theme.mainColors.brown};
//   // font-size: ${({ font }) => font || theme.fontSizes.l};
//   // background: ${({ bg }) => bg || theme.mainColors.beige};
//   // box-shadow: ${({ shadow }) => shadow || '0px 4px 10px 0px #fc842d80'};
//   // transition: ${theme.transition.all};
//   cursor: pointer;

//   &:hover,
//   :focus {
//     color: red;
//     // color: ${({ bg }) => bg || theme.colors.accent};
//     // background: ${({ color }) => color || theme.colors.white};
//     // box-shadow: ${({ shadowHover }) => shadowHover || 'none'};
//   }
// `;

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

export const StyledButton2 = styled('button')`
  display: grid;
  place-content: center;
  width: ${({ width }) => width || '276px'};
  height: ${({ height }) => height || '67px'};
  line-height: 29.26px;
  letter-spacing: 0.04em;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  border-radius: ${({ radius }) => radius || '10px'};
  color: ${({ color }) => color || '#705A66'};
  font-size: ${({ font }) => font || '24px'};
  background: ${({ bg }) => bg || '#F5EEE0'};
  // box-shadow: ${({ shadow }) => shadow || '0px 4px 10px 0px #fc842d80'};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:focus ${SvgBox} {
    display: flex;
  }

  &:hover ${SvgBox} {
    display: flex;
  }
`;

//  ${({ hoverChange }) => hoverChange}
