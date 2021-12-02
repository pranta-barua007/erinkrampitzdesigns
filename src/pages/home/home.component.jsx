import * as React from "react";

import Hero from "../../components/hero/hero.component";
import Intro from "../../components/intro/intro.component";
import ImagesList from "../../components/image-list/image-list.component";

import { mockData } from "../../mock-data/mock-data";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <ImagesList itemData={mockData["instaData"]} />
    </div>
  );
};

export default HomePage;
