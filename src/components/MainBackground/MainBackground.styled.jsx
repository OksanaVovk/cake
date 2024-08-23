import styled from '@emotion/styled';

export const BackgroundStyled = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  //     @media screen and (min-width: 768px) {
  //   min-height: 1024px;
  // }
  @media screen and (min-width: 1440px) {
    min-height: 8050px;
  }
`;

export const Img1 = styled.img`
  position: absolute;
  z-index: -1;
  height: 1098px;
  min-width: 100%;
  // left: -124px;
  // top: -16px;

  // object-position: 41% 50%;
  // object-position: 50% 50%;
  object-position: -124px -16px;
  // width: 100%;
  // height: 100%;
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Img2 = styled.img`
  position: absolute;
  min-width: 100%;
  height: 2242px;
  // right: 0;
  left: -124px;
  top: 2826px;
  z-index: -1;
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
