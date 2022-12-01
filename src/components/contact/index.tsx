import React from "react";
import Form from "./form/Form";
import Details from "./details/Details";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contacts" id="contacts">
      <h1 className="contacts-title">Contact Me</h1>
      <div className="cont">
        <Form />
        <Details />
      </div>
    </div>
  );
};

export default Contact;
