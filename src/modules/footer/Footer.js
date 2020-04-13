import React, { useState } from 'react';
import styled from 'styled-components';

import Player from 'components/player/Player';
import { useAuth } from 'context/auth-context';
import SignupPreviewBanner from 'modules/signup-banner/SignupPreviewBanner';
import AuthenticateModal from 'modules/authenticate-modal/AuthenticateModal';

const Container = styled.div`
  grid-area: footer;
  padding: 10px 0;
  background: ${props => props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Footer() {
  const [isOpen, toggleModal] = useState(false);
  const { user } = useAuth();

  const toggleAuthModal = () => {
    console.log('in');
    toggleModal(!isOpen);
  };

  return (
    <Container>
      {!user && <SignupPreviewBanner />}
      <Player authenticated={!!user} onUnauthenticated={toggleAuthModal} />
      {!user && (
        <AuthenticateModal isOpen={isOpen} onClose={() => toggleModal(false)} />
      )}
    </Container>
  );
}
