import styled, { keyframes, css } from 'styled-components';

const ModalBackdropAnimation = keyframes`
  from { opacity: 0; display: flex; }
  to { opacity: 1; }
`;

const ModalContentAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; transform: translateY(0); }
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${props => props.theme.zIndex.modal};
  display: none;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;

  ${props =>
    props.visible &&
    css`
      display: flex;
      animation: ${ModalBackdropAnimation} 0.2s forwards;
    `}
`;

export const ModalMask = styled.div``;

export const ModalChildren = styled.div`
  animation: ${ModalContentAnimation} 0.3s forwards;
  animation-delay: 0.3s;
  transform: translateY(100px);
  opacity: 0;
`;
