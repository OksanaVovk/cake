import styled from '@emotion/styled';

export const FooterBox = styled('div')`
  width: 100vw;
  background-color: ${p => p.theme.mainColors.brown};
`;

export const FooterBoxP = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  padding-top: 64px;
  padding-bottom: 100px;
  background-color: ${p => p.theme.mainColors.brown};
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1440px) {
    position: relative;
    height: 378px;
    width: 1440px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
export const TextBox = styled('div')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: 18px;
  color: ${p => p.theme.mainColors.grey};
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 210px;
    left: 1090px;
    text-align: left;
    margin-bottom: 0;
  }
`;

export const LogoBox = styled('div')`
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    margin-bottom: 0;
  }
`;
export const NavBox = styled('div')`
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 144px;
    left: 1090px;
    margin-bottom: 0;
  }
`;
export const TextBox1 = styled(TextBox)`
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    top: 164px;
    left: 100px;
  }
`;

export const Text = styled('p')`
 margin-bottom: 24px;
  }
`;
