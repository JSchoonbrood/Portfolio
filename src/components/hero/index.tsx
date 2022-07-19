import React from "react";
import "./hero.scss";
import { default as hero_img } from "../../images/hero_dev.svg";
import Desc from "./type";
import {
  Link,
} from "react-scroll";

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
          <Link                                                                                                                                                                                                                                    
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            className="hero__content-buttons-project"
          >
            Projects
          </Link>
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

      <div className="hero__image" id="projects">
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
