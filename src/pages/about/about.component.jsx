import * as React from "react";

import { AboutPageContainer, AboutImage, AboutDetails } from "./about.styled";

import AboutImg from "../../assets/about.jpg";
import { mockData } from "../../mock-data/mock-data";

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <AboutImage src={AboutImg} alt="about" />
      <AboutDetails
        start={mockData.about.para1}
        middle={mockData.about.para2}
        end={mockData.about.para3}
      />
    </AboutPageContainer>
  );
};

export default AboutPage;
