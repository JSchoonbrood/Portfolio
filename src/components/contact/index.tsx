import React from "react";
import Form from "./form/Form";
import Details from "./details/Details";
import "./contact.scss";
import FadeIn from "../FadeIn";

const Contact = () => {
  return (
    <FadeIn>
      <div className="contacts" id="contacts">
        <Form />
        <Details />
      </div>
    </FadeIn>
  );
};

export default Contact;
