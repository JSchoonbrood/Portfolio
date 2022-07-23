import React from "react";
import Form from "./form/Form";
import Details from "./details/Details";
import "./contact.scss";

const Contact = () => {
	return ( 
    <div className="contacts" id="contacts">
      <Form />
      <Details />
    </div>
  );
};

export default Contact;
