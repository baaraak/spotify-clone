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
  ButtonLogin,
  ButtonSignup,
  Divider,
} from './AuthenticateModal.styles';
import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function AuthenticateModal({ isOpen, onClose }) {
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
            <Link to="signup" onClick={onClose}>
              <ButtonLogin fullWidth color="secondary">
                SIGN UP FREE
              </ButtonLogin>
            </Link>
            <Divider />
            <Account>Already have an account?</Account>
            <Link to="login" onClick={onClose}>
              <ButtonSignup fullWidth color="primary">
                LOG IN
              </ButtonSignup>
            </Link>
          </ModalActions>
        </div>
      </AuthModal>
    </Modal>
  );
}
