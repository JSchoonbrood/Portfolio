import React from "react";
import "./hero.scss";
import { default as hero_img } from "../../images/hero_dev.svg";
import Desc from "./type";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__content-title">
          Hi! <span className="waving-hand">👋🏻</span>
          <br />
          I'm <span className="hero__content-title-span">Jake!</span>
        </h1>
        <Desc />
      </div>

      <div className="hero__image">
        <img src={hero_img} alt="Clipart Developer" />
      </div>
    </div>
  );
};

export default Hero;
