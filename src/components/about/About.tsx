import React, {useState} from 'react'
import { StringMappingType } from 'typescript'
import './about.scss'

const About = () => {
  const [activeComponent, setActiveComponent] = useState(0)

  const handleClick = (component: number) => setActiveComponent(activeComponent => component);
  
  const Skills = () => (
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
  )

  const Education = () => (
    <div className="about__education">
      <div className="about__education-block">
        <div className="about__education-block-content">
          <h3>2019-2021</h3>
          <h4>University Of York</h4>
          <p>Graduated with First Class Honours in Computer Science (BEng). </p>
        </div>
      </div>

      <div className="about__education-block">
        <div className="about__education-block-content">
          <h3>2017-2019</h3>
          <h4>Queensbury Academy - ALevels</h4>
          <p></p>
        </div>
      </div>
    </div>
  )

  const Hobbies = () => (
    <div className="about__hobbies">
        <ul>
          <li>Vehicle Mechanics</li>
          <li>Engine Tuning</li>
          <li>DIY</li>
        </ul>
      </div>
  )

  return (
    <div className="about" id="about">
      <div className="about__desc">
      <div className="about__desc-img-container"><p>Hi</p></div>
      <div className="about__desc-bio"><p>Hello</p></div>
      </div>

      <div className="about__sections">
        <button onClick={() => handleClick(0)}>Skills</button>
        <button onClick={() => handleClick(1)}>Education</button>
        <button onClick={() => handleClick(2)}>Hobbies</button>
      </div>

      {
      activeComponent === 0 ? (
          <Skills />
      ) : activeComponent === 1 ? (
          <Education />
      ) : activeComponent === 2 ? (
          <Hobbies />
      ) : null
      }

    </div>
      

      
  )
}

export default About