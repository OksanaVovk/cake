import styled from '@emotion/styled/macro';

export const MobileBannerBox = styled('div')`
  display: block;
  min-height: 592px;
  position: relative;
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MobileBannerImg = styled('img')`
  position: absolute;
  bottom: 20px;
  left: -10px;
  max-width: 100%;
`;

export const ButtonBox = styled('div')`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const SocialBox = styled('div')`
  position: absolute;
  right: 0px;
  top: 50%;
`;

export const Title = styled('h1')`
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: Moniqa;
  font-weight: 900;
  font-size: 120px;
  line-height: 124.92px;
  color: ${p => p.theme.mainColors.brown};
`;

export const Text = styled('h2')`
  position: absolute;
  top: 186px;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21.84px;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 24px;
`;
