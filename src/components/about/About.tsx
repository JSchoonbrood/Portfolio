import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about">
      <div className="about__img-container"></div>
      <div className="about__bio"></div>
      <div className="about__sections">
        <button>Skills</button>
        <button>Education</button>
        <button>Hobbies</button>
      </div>

      <div className="about__skills">
        <p>Front-End</p>
        <ul className="about__skills-frontend horizontal-list">
          <li>HTML5</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JS</li>
          <li>TS</li>
          <li>React</li>
        </ul>
        <p>Other</p>
        <ul className="about__skills-other horizontal-list">
          <li>Python</li>
          <li>Sqlite3</li>
          <li>Qt (Python)</li>
        </ul>
      </div>
      <div className="about__education"></div>
      <div className="about__hobbies">
        <ul>
          <li>Vehicle Mechanics</li>
          <li>Engine Tuning</li>
          <li>DIY</li>
        </ul>
      </div>
    </div>
  )
}

export default About