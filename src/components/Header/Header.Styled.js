import styled from '@emotion/styled';

export const HeaderBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 59px 0px 51px 0px;
  border-bottom: solid 1px ${p => p.theme.secondaryColors.white};
`;
