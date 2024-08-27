import styled from '@emotion/styled';

export const HeaderBox = styled('div')`
  width: 100%;
  border-bottom: solid 1px ${p => p.theme.secondaryColors.white};
`;

export const HeaderTextBox = styled('div')`
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 59px 100px 51px 100px;
  }
`;
