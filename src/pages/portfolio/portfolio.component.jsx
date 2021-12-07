import * as React from "react";

import ImagesList from "../../components/image-list/image-list.component";

import { mockData } from "../../mock-data/mock-data";

const PortfolioPage = () => {
  return (
    <div>
      <ImagesList itemData={mockData["instaData"]} />
    </div>
  );
};

export default PortfolioPage;
