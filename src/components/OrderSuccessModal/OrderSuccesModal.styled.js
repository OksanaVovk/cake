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
    width: 1440px;
    height: 900px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opaсity 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
