import React from "react";
import "./hero.scss";
import { default as hero_img } from "../../images/hero_dev.svg";
import Desc from "./type";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/projects" className="hero__content-buttons-project">Projects</NavLink>
          <a href="https://github.com/JSchoonbrood" className="hero__content-buttons-github" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="hero__image">
        <img src={hero_img} alt="Clipart Developer" />
      </div>
    </div>
  );
};

export default Hero;

