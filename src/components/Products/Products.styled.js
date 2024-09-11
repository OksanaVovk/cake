import styled from '@emotion/styled';

export const ProductsBox = styled('ul')`
  display: grid;
  grid-template-columns: repeat(1, 355px);
  grid-auto-rows: minmax(182px, auto);
  grid-row-gap: 30px;
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 605px);
    grid-auto-rows: minmax(270px, auto);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-bottom: 120px;
  }
`;

export const ProductBox = styled('li')`
  position: relative;
  // width: 355px;
  // height: 182px;
`;

export const ButtonBox = styled('div')`
  position: absolute;
  display: inline-block;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
