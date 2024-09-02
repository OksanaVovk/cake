import styled from '@emotion/styled';

export const Box = styled('div')`
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-left: 106px;
    padding-right: 66px;
    margin-bottom: 120px;
  }
`;

export const WhyBox = styled('div')`
  @media screen and (min-width: 1440px) {
    position: relative;
    width: 1068px;
    height: 681px;
  }
`;

export const Title = styled('h1')`
  font-family: Moniqa;
  font-weight: 900;
  font-size: 80px;
  line-height: 83.28px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 218px;
    font-size: 100px;
    line-height: 104.1px;
    text-align: center;
    margin-bottom: 0;
  }
`;

export const WhyImg = styled('img')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 48px;
    left: 286px;
    transform: rotate(8.83deg);
  }
`;

export const WhySvg1 = styled('svg')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 146.42px;
    left: 200.08px;
    width: 162.13px;
    height: 50.64px;
    fill: ${p => p.theme.mainColors.brown};
  }
`;

export const WhySvg2 = styled('svg')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 457.28px;
    left: 337.14px;
    width: 24.22px;
    height: 85.3px;
    fill: ${p => p.theme.mainColors.brown};
  }
`;

export const WhySvg3 = styled('svg')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 434.55px;
    right: 214.16px;
    width: 165.71px;
    height: 97.37px;
    fill: ${p => p.theme.mainColors.brown};
  }
`;

export const TextTitle = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21.94px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.26px;
    margin-bottom: 24px;
  }
`;

export const Text = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: 16px;
  line-height: 19.5px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: ${({ font }) => font || '16px'};
    line-height: 21.94px;
  }
`;

export const BoxText1 = styled('div')`
  width: 355px;
  height: 98px;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 204px;
    left: 0px;
    width: 288px;
    height: 148px;
    margin-bottom: 0px;
  }
`;

export const BoxText3 = styled('div')`
  width: 355px;
  height: 175px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: 0;
    left: 265px;
    width: 499px;
    height: 153px;
  }
`;

export const BoxText2 = styled('div')`
  width: 355px;
  height: 140px;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 204px;
    right: 0;
    width: 393px;
    height: 211px;
    margin-bottom: 0;
  }
`;
