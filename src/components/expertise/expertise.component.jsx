import * as React from "react";

import {
  ExpertiseContainer,
  ExpertiseHeader,
  ExpertiseContent,
} from "./expertise.styled";

import { mockData } from "../../mock-data/mock-data";

const Expertise = () => (
  <ExpertiseContainer>
    <ExpertiseHeader>WHY CHOOSE ME</ExpertiseHeader>
    {mockData.expertises.map((expertise) => (
      <ExpertiseContent
        key={expertise.title}
        title={expertise.title}
        content={expertise.content}
      />
    ))}
  </ExpertiseContainer>
);

export default Expertise;
