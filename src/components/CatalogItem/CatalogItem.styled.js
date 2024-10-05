import styled from '@emotion/styled';

export const BasketSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.mainColors.brown};

  @media screen and (min-width: 1440px) {
    width: 25px;
    height: 25px;
  }
`;

export const BasketDiv = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BasketText = styled('p')`
  font-family: Montserrat OrderFormBoldText;
  font-weight: 800;
  text-align: left;
  font-size: 20px;
  line-height: 21.6px;
  color: ${p => p.theme.mainColors.accent};
  @media screen and (min-width: 1440px) {
    font-size: 35px;
    line-height: 37.8px;
  }
`;

export const ItemsName = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 14px;
  line-height: 17.06px;
  margin-bottom: 10px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.26px;
    margin-bottom: 12px;
  }
`;

export const ItemsText = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 12px;
  line-height: 13px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 19.5px;
  }
`;

export const BoxText = styled('div')`
  display: flex;
  flex-direction: column;
  width: 167px;
  min-height: 61px;
  @media screen and (min-width: 1440px) {
    width: 288px;
    min-height: 90px;
  }
`;

export const BoxGText = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 167px;
  padding-top: 8px;

  @media screen and (min-width: 1440px) {
    width: 393px;
     padding-top: 20px;
`;

export const BoxImg = styled('div')`
  width: 167px;
  height: 185px;

  @media screen and (min-width: 1440px) {
    width: 393px;
    height: 393px;
  }
`;
export const Img = styled('img')`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const BoxItem = styled('li')`
  transition-property: transform 100ms linear;
  &:hover,
  focus {
    transform: scale(1.1);
  }
`;
