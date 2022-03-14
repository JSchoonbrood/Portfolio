import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about" id="about">
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
      <div className="about__education">
        <div className="about__education-block">
          <div className="about__education-block_content">
            <h3>2019-2021</h3>
            <h4>University Of York</h4>
            <p>Graduated with First Class Honours in Computer Science (BEng). </p>
          </div>
        </div>

        <div className="about__education-block">
          <div className="about__education-block_content">
            <h3>2017-2019</h3>
            <h4>Queensbury Academy - ALevels</h4>
            <p></p>
          </div>
        </div>
      </div>

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