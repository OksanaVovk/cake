import styled from '@emotion/styled';

export const ItemBox = styled('li')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: 1440px) {
    width: 624px;
    height: 300px;
  }
`;

export const BoxImg = styled('div')`
  width: 168px;
  height: 176px;

  @media screen and (min-width: 1440px) {
    width: 286px;
    height: 300px;
  }
`;

export const Img = styled('img')`
  display: block;
  min-width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const TextBoxLarge = styled('div')`
  width: 168px;

  @media screen and (min-width: 1440px) {
    width: 320px;
  }
`;
export const ItemsName = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  line-height: 21.94px;
  margin-bottom: 24px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.26px;
    margin-bottom: 40px;
  }
`;

export const ItemsText = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 14px;
  line-height: 15.17px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 17.3px;
  }
`;

export const TextBox = styled('div')`
display: grid;
  grid-template-columns: 100px 60px;
  margin-bottom: 16px;

  

  @media screen and (min-width: 1440px) {
   grid-template-columns: 120px 200px;
    margin-bottom: 24px;
`;

export const TextBoxLast = styled(TextBox)`
  margin-bottom: 0;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;`;
