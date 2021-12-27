import * as React from "react";
import { Helmet } from "react-helmet";

import TestimonialOverview from "../../components/testimonial-overview/testimonial-overview.component";

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Feedback of my work" />
        <meta name="keywords" content="Testimonials, Feedback" />
        <title>Testimonials</title>
        <link
          rel="canonical"
          href="https://erinkrampitzdesigns.com/testimonials"
        />
      </Helmet>
      <TestimonialOverview />
    </>
  );
};

export default TestimonialsPage;
