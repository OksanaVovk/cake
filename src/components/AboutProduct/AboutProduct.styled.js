import styled from '@emotion/styled';
export const AboutProductDiv = styled('div')`
  width: 100%;
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 64px;
  }
`;
export const ButtonsDiv = styled('ul')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 36px;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 4px solid ${p => p.theme.mainColors.beige};
  margin-bottom: 32px;
  @media screen and (min-width: 1440px) {
    width: 605px;
    height: 42px;
     margin-bottom: 40px;
   
`;

export const ButtonAbout = styled('button')`
display: flex;
 align-items: flex-start;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 19.50px;
  text-align: left;
  height: 36px;
  color: ${p => p.theme.mainColors.brown};
    transition: border-bottom 100ms linear;
  &:hover,
  focus {
    border-bottom: 4px solid ${p => p.theme.mainColors.brown};
  }
  &.active{
  border-bottom: 4px solid ${p => p.theme.mainColors.brown};
     }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  line-height: 21.94px;
  height: 42px;
   
   
`;
export const TextGBox = styled('div')`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 605px;
  }
`;

export const TextLBox = styled('div')`
  @media screen and (min-width: 1440px) {
    width: 499px;
  }
`;

export const Text = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 23.4px;
  text-align: left;
`;

export const List = styled('ol')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 23.4px;
  text-align: left;
  padding-left: 25px;
  margin-top: 18px;
  margin-bottom: 0;
`;
