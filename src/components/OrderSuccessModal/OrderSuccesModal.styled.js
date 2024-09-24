import styled from '@emotion/styled';
import { StyledButton } from 'components/Button/Button.styled';

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 375px;
  height: 814px;
  background-color: ${p => p.theme.mainColors.grey};
  padding: 100px 10px 80px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    width: 1440px;
    height: 900px;
    padding: 0;
    padding-top: 120px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opaсity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ModalSvg = styled('svg')`
  width: 20.07px;
  height: 20px;
  fill: ${p => p.theme.mainColors.brown};
  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const ModalButton = styled('button')`
  position: absolute;
  top: 40px;
  right: 24px;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    top: 64px;
    right: 100px;
  }
`;
export const Img = styled('img')`
  width: 166px;
  height: 170px;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    width: 214px;
    height: 216px;
  }
`;
export const ButtonLight = styled(StyledButton)`
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;
  transition: transform 100ms linear;
  margin-bottom: 24px;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    width: 393px;
    font-size: 24px;
    margin-right: 32px;
    margin-bottom: 0;
  }
`;

export const ButtonDark = styled(StyledButton)`
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;
  background-color: ${p => p.theme.mainColors.brown};
  color: ${p => p.theme.mainColors.beige};
  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    width: 393px;
    font-size: 24px;
  }
`;

export const Title = styled('h1')`
  font-family: Moniqa;
  font-weight: 900;
  font-size: 80px;
  color: ${p => p.theme.mainColors.brown};
  line-height: 83.28px;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    font-size: 100px;
    line-height: 104.1px;
  }
`;

export const Text = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: 16px;
  line-height: 20.8px;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 32px;
  @media screen and (min-width: 1440px) {
    width: 663px;
    font-size: 24px;
    line-height: 32.5px;
    margin-bottom: 80px;
  }
`;

export const ButtonBox = styled('div')`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
