import * as React from "react";
import { Helmet } from "react-helmet";

import Hero from "../../components/hero/hero.component";
import Intro from "../../components/intro/intro.component";
import ImagesList from "../../components/image-list/image-list.component";
import TestimonialSlider from "../../components/testimonial-slider/testimonial-slider.component";
import Expertise from "../../components/expertise/expertise.component";

import { mockData } from "../../mock-data/mock-data";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Interior Designer - Cutting-Edge Interior Design. The Most Complete Interior Design Service"
        />
        <title>Erin Krampitz – Turn your House into a Home</title>
        <link rel="canonical" href="https://erinkrampitzdesigns.com" />
      </Helmet>
      <Hero />
      <Intro />
      <ImagesList itemData={mockData["instaData"]} />
      <TestimonialSlider />
      <Expertise />
    </>
  );
};

export default HomePage;
