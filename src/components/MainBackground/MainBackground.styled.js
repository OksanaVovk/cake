import styled from '@emotion/styled';

export const BackgroundStyled = styled.div`
  width: 100%;
  overflow: hidden;
  pointer-events: none;

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 5998.15px;
  }
`;

export const Img1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  // height: 1098px;
  min-width: 100%;
  object-fit: cover;
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Img2 = styled.img`
  position: absolute;
  min-width: 100%;
  // height: 2242px;
  left: 0;
  top: 1930px;
  z-index: -1;
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Img3 = styled.img`
  position: absolute;
  left: 0;
  top: 1730px;
  z-index: -1;
  min-width: 100%;
  display: block;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
