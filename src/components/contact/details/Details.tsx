import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Details = () => {
  return (
    <div className="cont-details">
      <ul className="cont-details__list">
        <li className="cont-details__item">
          <FaEnvelope className="cont-details__icon" />
          <h1 className="cont-details__title">Email</h1>
          <p className="cont-details__desc">schoonbrood.jake@gmail.com</p>
        </li>
        <li className="cont-details__item">
          <FaGithub className="cont-details__icon" />
          <h1 className="cont-details__title">GitHub</h1>
          <a
            href="https://github.com/JSchoonbrood"
            target="_blank"
            rel="noreferrer"
            className="cont-details__link"
          >
            JSchoonbrood
          </a>
        </li>
        <li className="cont-details__item">
          <FaLinkedin className="cont-details__icon" />
          <h1 className="cont-details__title">Linkedin</h1>
          <a
            href="https://www.linkedin.com/in/JSchoonbrood/"
            target="_blank"
            rel="noreferrer"
            className="cont-details__link"
          >
            JSchoonbrood
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Details;
