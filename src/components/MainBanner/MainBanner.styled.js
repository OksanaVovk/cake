import styled from '@emotion/styled';

export const MainBannerBox = styled('div')`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: relative;
    overflow: hidden;
    width: 1240px;
    height: 900px;
    margin-bottom: 97px;
  }
`;

export const SocialBox = styled('div')`
  position: absolute;
  top: 632px;
  right: 4px;
`;
