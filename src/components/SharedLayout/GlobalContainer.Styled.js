import styled from '@emotion/styled';

export const GlobalContainerStyled = styled.div`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
  }
`;
