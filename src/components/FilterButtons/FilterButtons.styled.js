import styled from '@emotion/styled';

export const ButtonFilter = styled('button')`
  display: grid;
  place-content: center;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 15.84px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  border-radius: 30px;
  border: 1px solid ${p => p.theme.mainColors.brown};
  padding: 10px 30px 10px 30px;
  transition: background-color 100ms linear, color 100ms linear;
  &:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.mainColors.brown};
    color: ${p => p.theme.mainColors.grey};
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 17.06px;
  }
`;

export const FilterBox = styled('ul')`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-row-gap: 20px;
  margin-bottom: 64px;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const FilterItem = styled('li')`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;
