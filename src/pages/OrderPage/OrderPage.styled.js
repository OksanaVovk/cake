import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const OrderPageBox = styled('div')`
  padding-top: 24px;
  padding-bottom: 100px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 120px;
  }
`;

export const OrderFormBox = styled('div')`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const OrderBasketBox = styled('div')`
  @media screen and (min-width: 1440px) {
    padding-top: 61px;
  }
`;

export const LinkToCatalog = styled(Link)`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  color: ${p => p.theme.mainColors.brown};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.mainColors.accent};
  }
`;

export const Title = styled('h1')`
  font-family: Moniqa;
  font-weight: 900;
  font-size: 80px;
  line-height: 83.28px;
  text-align: left;
  color: ${p => p.theme.mainColors.brown};
  margin-top: 32px;
  margin-bottom: 47px;
  @media screen and (min-width: 1440px) {
    margin-top: 19px;
    margin-bottom: 64px;
  }
`;
