import * as React from "react";
import { Helmet } from "react-helmet";

import { AboutPageContainer, AboutImage, AboutDetails } from "./about.styled";

import AboutImg from "../../assets/about.jpg";
import { mockData } from "../../mock-data/mock-data";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="My name is Erin Krampitz. As far as I can remember I have always loved decorating, organizing, and refreshing spaces. Whether I am simply changing a paint color or moving around furniture, it has been a true passion of mine."
        />
        <meta
          name="keywords"
          content="Home Design, Interior Design, Decoration"
        />
        <meta name="author" content="Erin Krampitz" />
        <title>About Me</title>
        <link rel="canonical" href="https://erinkrampitzdesigns.com/about" />
      </Helmet>
      <AboutPageContainer>
        <AboutImage src={AboutImg} alt="about" />
        <AboutDetails
          start={mockData.about.para1}
          middle={mockData.about.para2}
          end={mockData.about.para3}
        />
      </AboutPageContainer>
    </>
  );
};

export default AboutPage;
