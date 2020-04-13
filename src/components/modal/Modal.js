import React, { useState, useEffect, useRef } from 'react';
import { ModalContainer, ModalChildren } from './Modal.styles';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen = false, children, onClose }) {
  const [visible, toggleVisibility] = useState(isOpen);
  const modalRef = useRef();

  useEffect(() => {
    toggleVisibility(isOpen);
  }, [isOpen]);

  const onClick = e => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    visible &&
    createPortal(
      <ModalContainer visible={visible} onClick={onClick} ref={modalRef}>
        <ModalChildren>{children}</ModalChildren>
      </ModalContainer>,
      document.body,
    )
  );
}
