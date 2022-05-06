import React from "react";
import EducationData from "./EducationData";

const Education = () => {
  return (
    <div className="about__education">
      <ul>
        {EducationData.map(({ name, qualification, grade, years, desc, notableAchievements }) => {
          return (
            <li className="about__education-block">
              <h1 className="about__education-block-title">{name}</h1>
              <h1 className="about__education-block-years">{years}</h1> 
              <h2 className="about__education-block-qualification">{qualification}</h2>
              <h2 className="about__education-block-grade">{grade}</h2>
              <p className="about__education-block-desc">{desc}</p>
              <ul className="about__education-block-list">
                {notableAchievements.map((value) => {
                  return (
                    <li>{value}</li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Education;
