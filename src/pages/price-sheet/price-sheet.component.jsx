import * as React from "react";
import { Helmet } from "react-helmet";

import { PriceSheetContainer } from "./price-sheet.styled";
import PriceCard from "../../components/price-card/price-card.component";

export default function PriceSheetPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Pricing of Home design service" />
        <meta
          name="keywords"
          content="Interior Design, Home Design, Pricing, Home Decoration Costing"
        />
        <title>Price Sheet</title>
        <link
          rel="canonical"
          href="https://erinkrampitzdesigns.com/price-sheet"
        />
      </Helmet>
      <PriceSheetContainer>
        <PriceCard priceHeading={"Rate"} price={200} priceInfo={"hour"} />
        <PriceCard
          priceHeading={"Consulting"}
          price={300}
          priceInfo={"consult"}
        />
      </PriceSheetContainer>
    </>
  );
}
