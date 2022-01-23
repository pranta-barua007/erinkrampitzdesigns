import * as React from "react";

import {
  FooterContainer,
  FooterTitle,
  FooterButton,
  FooterCopyright,
  AppCreator,
} from "./footer.styled";

const Footer = () => (
  <FooterContainer>
    <FooterTitle>Are you ready for your next project?</FooterTitle>
    <FooterButton>GET QUOTATION</FooterButton>
    <FooterCopyright>
      &copy; Copyright {new Date().getFullYear()} - Erin Krampitz
    </FooterCopyright>
    <AppCreator creator={"Pranta Barua"} manager={"Colton Ehrman"} />
  </FooterContainer>
);

export default Footer;
