import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Details = () => {
  const [copied, setCopied] = React.useState(false);

  const handleEmail = () => {
    if (!copied) {
      setCopied(true);
      navigator.clipboard.writeText("schoonbrood.jake@gmail.com");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="cont-details">
      <ul className="cont-details__list">
        <li className="cont-details__item">
          <FaEnvelope className="cont-details__icon" />
          <h1 className="cont-details__title">Email</h1>
          <p
            className={
              "cont-details__desc tooltip" + (copied ? " tooltip-visible" : "")
            }
            onClick={handleEmail}
          >
            schoonbrood.jake@gmail.com
            <span className="tooltiptext">Copied</span>
          </p>
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
