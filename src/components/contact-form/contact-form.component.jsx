import * as React from "react";

import {
  ContactFormContainer,
  FormField,
  FormSubmitButton,
} from "./contact-form.styled";

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <FormField name="name" type="name" label="Name" required maxRows={1} />
      <FormField name="email" type="email" label="Email" required maxRows={1} />
      <FormField name="message" label="Message" required multiline rows={6} />
      <FormSubmitButton>Submit</FormSubmitButton>
    </ContactFormContainer>
  );
};

export default ContactForm;
