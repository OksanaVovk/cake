import styled from '@emotion/styled';

export const CatalogListBox = styled('ul')`
  display: grid;
  grid-template-columns: repeat(2, 167px);
  grid-auto-rows: minmax(254px, auto);
  grid-column-gap: 20px;
  grid-row-gap: 32px;
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 393px);
    grid-auto-rows: minmax(503px, auto);
    grid-column-gap: 30px;
    margin-bottom: 120px;
  }
`;
