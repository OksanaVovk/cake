import styled from '@emotion/styled';
export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 100%;
  height: 100%;
  padding: 10px 40px 10px 40px;
  background-color: ${p => p.theme.mainColors.grey};

  @media screen and (min-width: 1440px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    width: 1236px;
    height: auto;
    padding: 80px 100px 80px 100px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opaсity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const ModalSvg = styled('svg')`
  width: 32px;
  height: 32px;
  fill: ${p => p.theme.mainColors.brown};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: ${p => p.theme.mainColors.accent};
  }
`;

export const ModalButton = styled('button')`
  border: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const ModalButto = styled('button')`
  // color: transparent;
  // border: none;
  // cursor: pointer;
  // width: 32px;
  // height: 32px;
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
