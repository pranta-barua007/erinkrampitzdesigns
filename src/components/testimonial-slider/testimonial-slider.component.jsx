import * as React from "react";

import {
  TestimonialSliderContainer,
  TestimonialHeader,
  TestimonialSliderBackButton,
  TestimonialSliderNextButton,
  TestimonialContentContainer,
  TestimonialContent,
} from "./testimonial-slider.styled";

import { mockData } from "../../mock-data/mock-data";

function TestimonialSlider() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = mockData.testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <TestimonialSliderContainer>
      <TestimonialHeader>what people say about me</TestimonialHeader>
      <TestimonialSliderBackButton
        maxSteps={maxSteps}
        activeStep={activeStep}
        onClick={handleBack}
      />
      <TestimonialContentContainer
        index={activeStep}
        onChangeIndex={handleStepChange}
      >
        {mockData.testimonials.map((testimonial, index) => (
          <div key={testimonial.author}>
            {Math.abs(activeStep - index) <= 2 ? (
              <TestimonialContent
                author={testimonial.author}
                data={testimonial.data}
              />
            ) : null}
          </div>
        ))}
      </TestimonialContentContainer>
      <TestimonialSliderNextButton
        maxSteps={maxSteps}
        activeStep={activeStep}
        onClick={handleNext}
      />
    </TestimonialSliderContainer>
  );
}

export default TestimonialSlider;
