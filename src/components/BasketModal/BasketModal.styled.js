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

  @media screen and (min-width: 768px) {
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
