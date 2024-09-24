import styled from '@emotion/styled';
export const ModalWindow = styled.div`
  overflow-y: scroll;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 375px;
  height: 100%;
  background-color: ${p => p.theme.mainColors.grey};

  @media screen and (min-width: 1440px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    width: 1236px;
    min-height: 613px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opaсity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const TitleDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 24px 48px 24px;

  @media screen and (min-width: 1440px) {
    border-bottom: solid 1px ${p => p.theme.secondaryColors.white};
    padding: 80px 100px 24px 100px;
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
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
`;

export const ModalTitle = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  line-height: 21.95px;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.26px;
  }
`;

export const ProductDiv = styled('div')`
  padding: 0 10px 54px 10px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 100px 100px 100px 100px;
  }
`;

export const TotalPrDiv = styled('div')`
  background-color: ${p => p.theme.mainColors.beige};
  border-radius: 10px;
  width: 100%;
  padding: 40px 16px 40px 16px;
  @media screen and (min-width: 1440px) {
    width: 319px;
    height: 256.5px;
    padding: 32px 16px 32px 16px;
  }
`;

export const TextDiv = styled('div')`
  padding: 0 28px 24px 28px;
  border-bottom: solid 1px ${p => p.theme.secondaryColors.white};
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    padding: 0 0 24px 0;
  }
`;

export const TextBoldDiv = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 28px;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const Text = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 18px;
  line-height: 19.4px;
  color: ${p => p.theme.mainColors.brown};
`;

export const TextBold = styled('p')`
  font-family: Montserrat Bold, sans-serif;
  font-weight: 800;
  text-align: left;
  font-size: 16px;
  line-height: 17.3px;
  color: ${p => p.theme.mainColors.brown};
`;

export const ButtonOrder = styled('button')`
  display: grid;
  place-content: center;
  width: 323px;
  height: 67px;
  line-height: 29.26px;
  letter-spacing: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  border-radius: 10px;
  font-size: 18px;
  background-color: ${p => p.theme.mainColors.brown};
  color: ${p => p.theme.mainColors.beige};

  transition: transform 100ms linear;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    width: 287px;
    font-size: 24px;
  }
`;
