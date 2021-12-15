import * as React from "react";

import {
  PriceCardContainer,
  PriceCardContentContainer,
  PriceCardHeadingContainer,
  PriceCardHeadingText,
  PriceInfoContainer,
  PriceInfoTitle,
  PriceInfoSubTitle,
  PriceCardButtonContainer,
  PriceCardButton,
} from "./price-card.styled";

const PriceCard = ({ priceHeading, price, priceInfo }) => {
  return (
    <PriceCardContainer>
      <PriceCardContentContainer>
        <PriceCardHeadingContainer>
          <PriceCardHeadingText>{priceHeading}</PriceCardHeadingText>
        </PriceCardHeadingContainer>
        <PriceInfoContainer>
          <PriceInfoTitle>${price}</PriceInfoTitle>
          <PriceInfoSubTitle>/ {priceInfo}</PriceInfoSubTitle>
        </PriceInfoContainer>
      </PriceCardContentContainer>
      <PriceCardButtonContainer>
        <PriceCardButton>Request Now</PriceCardButton>
      </PriceCardButtonContainer>
    </PriceCardContainer>
  );
};

export default PriceCard;
