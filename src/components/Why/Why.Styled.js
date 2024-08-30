import styled from '@emotion/styled';

export const WhyBox = styled('div')`
  position: relative;
  //   top: 69.87px;
  //   left: 230.67px;
  width: 1068px;
  height: 681px;
`;

export const Title = styled('h1')`
  position: absolute;
  top: 0;
  left: 218px;
  font-family: Moniqa;
  font-weight: 900;
  font-size: 100px;
  line-height: 104.1px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};

  // border: 0.5px solid black;
`;

export const WhyImg = styled('img')`
  position: absolute;
  top: 48px;
  left: 286px;

  transform: rotate(8.83deg);
  // border: 4px solid black;
`;

export const WhySvg1 = styled('svg')`
  position: absolute;
  top: 146.42px;
  left: 200.08px;
  width: 162.13px;
  height: 50.64px;
  fill: ${p => p.theme.mainColors.brown};
`;

export const WhySvg2 = styled('svg')`
  position: absolute;
  top: 457.28px;
  left: 337.14px;
  width: 24.22px;
  height: 85.3px;
  fill: ${p => p.theme.mainColors.brown};
`;

export const WhySvg3 = styled('svg')`
  position: absolute;
  top: 434.55px;
  right: 214.16px;
  width: 165.71px;
  height: 97.37px;
  fill: ${p => p.theme.mainColors.brown};
`;

export const TextTitle = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 29.26px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 24px;
`;

export const Text = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: ${({ font }) => font || '16px'};
  line-height: 21.94px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
`;

export const BoxText1 = styled('div')`
  position: absolute;
  top: 204px;
  left: 0px;
  width: 288px;
  height: 148px;
`;

export const BoxText3 = styled('div')`
  position: absolute;
  bottom: 0;
  left: 265px;
  width: 499px;
  height: 153px;
`;

export const BoxText2 = styled('div')`
  position: absolute;
  top: 204px;
  right: 0;
  width: 393px;
  height: 211px;
`;
