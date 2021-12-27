import * as React from "react";
import { Helmet } from "react-helmet";

import ImagesList from "../../components/image-list/image-list.component";

import { mockData } from "../../mock-data/mock-data";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Instagram images of my work" />
        <meta
          name="keywords"
          content="Interior Design, Home Design, Instagram Pictures"
        />
        <meta
          property="og:url"
          content="https://www.instagram.com/erinkrampitzdesigns/"
        />
        <title>Portfolio</title>
        <link
          rel="canonical"
          href="https://erinkrampitzdesigns.com/portfolio"
        />
      </Helmet>
      <ImagesList itemData={mockData["instaData"]} />
    </>
  );
};

export default PortfolioPage;
