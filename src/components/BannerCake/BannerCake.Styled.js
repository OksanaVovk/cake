import styled from '@emotion/styled';

export const BannerCakeBox = styled('div')`
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
    min-width: 100%;
    height: 623px;
    margin-left: -100px;
    margin-right: -100px;
    margin-bottom: 120px;
  }
`;

export const Img1 = styled.img`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Img2 = styled.img`
  display: block;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
