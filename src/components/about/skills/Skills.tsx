import React from "react";
import icons from "./icons";

const Skills = () => {
  return (
    <div className="about__skills">
      <p>Front-End</p>
      <ul className="about__skills-frontend horizontal-list">
        <li>
          <img src={icons.html5} className="icons" alt="html5" />
        </li>
        <li>
          <img src={icons.css3} className="icons" alt="css3" />
        </li>
        <li>
          <img src={icons.js} className="icons" alt="javascript" />
        </li>
        <li>
          <img src={icons.ts} className="icons" alt="typescript" />
        </li>
        <li>
          <img src={icons.react} className="icons" alt="react" />
        </li>
        <li>
          <img src={icons.sass} className="icons" alt="sass" />
        </li>
      </ul>
      <p>Other</p>
      <ul className="about__skills-other horizontal-list">
        <li>
          <img src={icons.python} className="icons" alt="python" />
        </li>
        <li>
          <img src={icons.sqlite} className="icons" alt="sqlite" />
        </li>
        <li>
          <img src={icons.qt} className="icons" alt="html5" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
