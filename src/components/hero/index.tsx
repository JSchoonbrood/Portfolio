import React from "react";
import "./hero.scss";
import { default as hero_img } from "../../images/hero_dev.svg";
import Desc from "./type";
import { HashLink } from "react-router-hash-link";
import scrollOffset from "../scrollOffset";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__content-title">
          Jake
          <span className="hero__content-title-span"> Schoonbrood</span>
        </h1>
        <Desc />
        <p className="hero__content-bio">
          I'm an enthusiastic software engineer who enjoys solving problems.
        </p>
        <div className="hero__content-buttons">
          <HashLink
            to="/"
            elementId="projects"
            smooth
            className="hero__content-buttons-project"
            scroll={(elem) => scrollOffset(elem)}
          >
            Projects
          </HashLink>
          <a
            href="https://github.com/JSchoonbrood"
            className="hero__content-buttons-github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero__image">
        <img src={hero_img} alt="Clipart Developer" />
      </div>

      {/* <div className="background-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none">
            <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;
