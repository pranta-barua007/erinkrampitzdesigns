import * as React from "react";

import {
  TestimonialOverviewContainer,
  TestimonialOverviewContent,
} from "./testimonial-overview.styled";
import { mockData } from "../../mock-data/mock-data";

const TestimonialOverview = () => {
  return (
    <TestimonialOverviewContainer>
      {mockData.testimonials.map((content, index) => (
        <TestimonialOverviewContent
          key={index}
          content={content.data}
          author={content.author}
        />
      ))}
    </TestimonialOverviewContainer>
  );
};

export default TestimonialOverview;
