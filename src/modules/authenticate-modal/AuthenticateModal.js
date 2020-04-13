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
  ModalActions,
  Button,
} from './AuthenticateModal.styles';
import { IoMdCheckmark } from 'react-icons/io';

export default function AuthenticateModal({
  isOpen,
  onClose,
  type = 'default',
}) {
  return (
    <Modal isOpen={false || isOpen} onClose={onClose}>
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
        <div>
          <ModalActions>
            <Button>SIGN UP FREE</Button>
            <div className="DIVIDER" />
            <Account>ALREADY HAVE AN ACCOUNT?</Account>
            <Button>LOG IN</Button>
          </ModalActions>
        </div>
      </AuthModal>
    </Modal>
  );
}
