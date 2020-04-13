import React from 'react';
import Modal from '../../components/modal/Modal';

import {
  AuthModal,
  ModalInfo,
  Close,
  List,
  ListItem,
  Account,
  H2,
} from './AuthenticateModal.styles';
import { IoMdCheckmark } from 'react-icons/io';

export default function AuthenticateModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={true || isOpen} onClose={onClose}>
      <AuthModal>
        <ModalInfo>
          <H2>Start listening with a free Spotify account</H2>
          <List>
            <ListItem>
              <IoMdCheckmark />
              No credit card, ever
            </ListItem>
            <ListItem>
              <IoMdCheckmark />
              Get unlimited podcasts
            </ListItem>
            <ListItem>
              <IoMdCheckmark />
              Play your favorite music, with ads
            </ListItem>
          </List>
          <Close>CLOSE</Close>
        </ModalInfo>

        <div className="modalActions">
          <button>SIGN UP FREE</button>
          <div className="DIVIDER" />
          <Account>ALREADY HAVE AN ACCOUNT?</Account>
          <button>LOG IN</button>
        </div>
      </AuthModal>
    </Modal>
  );
}
