import * as React from "react";
import heroAvatar from "../../assets/avatar.png";

import {
  HeroContainer,
  HeroInfoContainer,
  HeroAvatarContainer,
  HeroCtaButton,
  HeroSubTitle,
  HeroTitle
} from "./hero.styled";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroInfoContainer>
        <HeroTitle>
          erin
        </HeroTitle>
        <HeroTitle>
          krampitz
        </HeroTitle>
        <HeroSubTitle>
          Interior Decorator and Designer
        </HeroSubTitle>
        <HeroCtaButton>
          HIRE ME NOW
        </HeroCtaButton>
      </HeroInfoContainer>
      <HeroAvatarContainer>
        <img src={heroAvatar} alt="hero-avatar" />
      </HeroAvatarContainer>
    </HeroContainer>
  );
}
