import React from 'react'
import './hero.css'
import { default as hero_img } from '../../images/hero_dev.svg'
import Desc from "./type"

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__content">
        <h1 className="gradient__text">Hi, I'm <span>Jake</span></h1>
        <Desc />
      </div>

      <div className="hero__image">
          <img src={hero_img} />
        </div>
    </div>
  )
}

export default Hero