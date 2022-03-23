import React from 'react';

const Skills = () => {
  return (
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
  );
};

export default Skills;
