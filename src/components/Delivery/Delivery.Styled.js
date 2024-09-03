import styled from '@emotion/styled';

export const DeliveryBox = styled('div')`
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 120px;
    padding-left: 105px;
    padding-right: 105px;
    align-items: center;
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
    font-size: 100px;
    line-height: 104.1px;
    text-align: center;
    margin-bottom: 64px;
  }
`;

export const LinePositionBox = styled('div')`
  position: relative;
`;

export const DeliveryBoxSvg = styled('ul')`
  @media screen and (min-width: 1440px) {
    display: grid;
    width: 1030px;
    grid-template-columns: repeat(3, 288px);
    grid-auto-rows: minmax(242px, auto);
    grid-column-gap: 83px;
  }
`;

export const BoxSvg = styled('li')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid ${p => p.theme.secondaryColors.darkBeige};
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 0;
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

export const DeliverySvg1 = styled('svg')`
  width: 75px;
  height: 75px;
  @media screen and (min-width: 1440px) {
    width: 75.25px;
    height: 75.25px;
    fill: ${p => p.theme.secondaryColors.darkBeige};
  }
`;

export const DeliverySvg2 = styled('svg')`
    width: 102px;
    height: 70px;
    fill: ${p => p.theme.secondaryColors.darkBeige};
  }
`;

export const DeliverySvg3 = styled('svg')`
  width: 80px;
  height: 80px;
  @media screen and (min-width: 1440px) {
    width: 80px;
    height: 77.04px;
    fill: ${p => p.theme.secondaryColors.darkBeige};
  }
`;

export const Line1 = styled('div')`
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 339px;
    border-right: 1px solid ${p => p.theme.secondaryColors.darkBeige};
    width: 1px;
    height: 242px;
  }
`;

export const Line2 = styled('div')`
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 710px;
    border-right: 1px solid ${p => p.theme.secondaryColors.darkBeige};
    width: 1px;
    height: 242px;
  }
`;

export const TextTitle = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21.94px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 8px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.26px;
    margin-bottom: 20px;
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
    font-size: 18px;
    line-height: 21.94px;
    margin-bottom: 0;
  }
`;
