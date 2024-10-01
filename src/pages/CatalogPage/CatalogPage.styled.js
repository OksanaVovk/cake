import styled from '@emotion/styled';

export const CatalogPageBox = styled('div')`
  padding-top: 24px;
  min-minheight: 800px;
`;

export const CatalogPageTitle = styled('h1')`
  font-family: Moniqa;
  font-weight: 900;
  font-size: 80px;
  line-height: 83.28px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 104.1px;
  }
`;
