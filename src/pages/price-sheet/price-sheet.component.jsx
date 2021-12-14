import * as React from "react";

import { PriceSheetContainer } from "./price-sheet.styled";
import PriceCard from "../../components/price-card/price-card.component";

export default function PriceSheetPage() {
  return (
    <PriceSheetContainer>
      <PriceCard priceHeading={"Rate"} price={150} priceInfo={"hour"} />
      <PriceCard
        priceHeading={"Consulting"}
        price={200}
        priceInfo={"consult"}
      />
    </PriceSheetContainer>
  );
}
