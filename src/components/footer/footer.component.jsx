import * as React from "react";

import {
  FooterContainer,
  FooterTitle,
  FooterButton,
  FooterCopyright,
} from "./footer.styled";

const Footer = () => (
  <FooterContainer>
    <FooterTitle>Are you ready for your next project?</FooterTitle>
    <FooterButton>GET QUOTATION</FooterButton>
    <FooterCopyright>
      &copy; Copyright {new Date().getFullYear()} - Erin Krampitz
    </FooterCopyright>
  </FooterContainer>
);

export default Footer;
