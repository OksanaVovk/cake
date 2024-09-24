import styled from '@emotion/styled';

export const OrderBasketBox = styled('div')`
  width: 100%;
  padding: 40px 20px;
  background-color: ${p => p.theme.mainColors.beige};
  border-radius: 10px;
  margin-bottom: 80px;
  @media screen and (min-width: 1440px) {
    width: 489px;
    padding: 48px;
    margin-bottom: 0;
  }
`;

export const TextTitle = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  line-height: 19.4px;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 32px;
`;
