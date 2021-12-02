import React from "react";

import {
  IntroContainer,
  IntroLine,
  IntroTitle,
  IntroInfo,
} from "./intro.styled";

import { mockData } from "../../mock-data/mock-data";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroTitle>welcome</IntroTitle>
      <IntroLine />
      <IntroInfo>{mockData.introData}</IntroInfo>
    </IntroContainer>
  );
};

export default Intro;
