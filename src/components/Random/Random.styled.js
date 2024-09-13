import styled from '@emotion/styled';
export const RandomDiv = styled('div')`
  width: 100%;
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 120px;
  }
`;

export const Title = styled('h1')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 23.4px;
  text-align: left;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    font-size: 42px;
    line-height: 56.6px;
  }
`;

export const CardList = styled('ul')`
  display: grid;
  grid-template-columns: repeat(2, 167px);
  grid-auto-rows: minmax(254px, auto);
  grid-column-gap: 20px;
  grid-row-gap: 30px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 393px);
    grid-column-gap: 30px;
  }
`;
