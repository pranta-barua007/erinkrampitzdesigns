import * as React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../../components/contact-form/contact-form.component";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="To discuss your project with us please fill in our contact form. For pre-arranged meetings, our address is:  Sealy, TX 77474"
        />
        <meta name="keywords" content="Office, Address" />
        <title>Contact Me</title>
        <link rel="canonical" href="https://erinkrampitzdesigns.com/contact" />
      </Helmet>
      <ContactForm />
    </>
  );
};

export default ContactPage;
