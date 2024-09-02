import styled from '@emotion/styled';

export const AboutMeBox = styled('div')`
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
    position: relative;
    width: 1134px;
    height: 749px;
    margin-bottom: 120px;
  }
`;

export const AboutMeSvg = styled('svg')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 78px;
    left: 529px;
    width: 251px;
    height: 147px;
    fill: ${p => p.theme.mainColors.brown};
  }
`;

export const AboutMeImg1 = styled('img')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const AboutMeImg2 = styled('img')`
  display: block;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Title = styled('h1')`
  font-family: Moniqa;
  font-weight: 900;
  font-size: 80px;
  color: ${p => p.theme.mainColors.brown};
  line-height: 83.28px;
  text-align: center;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const TextBox = styled('div')`
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 265px;
    right: 0;
    width: 499px;
    height: 399px;
  }
`;

export const TextTitle = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21.94px;
  text-align: left;
  margin-bottom: 8px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.26px;
  }
`;

export const LittleText = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 14px;
  line-height: 17.07px;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 32px;
  @media screen and (min-width: 1440px) {
    font-size: ${({ font }) => font || '16px'};
    line-height: 19.5px;
    margin-bottom: 56px;
  }
`;

export const Text = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  line-height: 19.5px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: ${({ font }) => font || '18px'};
    line-height: 21.94px;
  }
`;
