import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
  background-color: rgba(33, 33, 33, 0.12);
  opacity: 1;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opaсity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
