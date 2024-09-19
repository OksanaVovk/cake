import styled from '@emotion/styled';
export const ModalWindow = styled.div`
  overflow-y: scroll;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 100%;
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
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: ${p => p.theme.mainColors.accent};
  }
`;

export const ModalButton = styled('button')`
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
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
  padding: 0 10px 154px 10px;
  @media screen and (min-width: 1440px) {
    padding: 100px 100px 100px 100px;
  }
`;
