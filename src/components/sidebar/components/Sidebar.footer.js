import React from 'react';
import { Footer, FooterLink, Hr } from '../Sidebar.styles';

export default function SiderbarFooter() {
  return (
    <Footer>
      <FooterLink href="https://www.google.com/" target="_blank">
        Cookies
      </FooterLink>
      <Hr />
      <FooterLink href="https://www.google.com/" target="_blank">
        Privacy
      </FooterLink>
    </Footer>
  );
}
