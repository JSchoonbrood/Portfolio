import React from "react";
import EducationData from "./EducationData";
import FadeIn from "../../FadeIn";

const Education = () => {
  return (
    <div className="about-education">  
      <FadeIn>
        <h1 className="about-title">Education</h1>
      </FadeIn>
      <ul>
        {EducationData.map(
          ({
            name,
            qualification,
            grade,
            years,
            desc,
            notableAchievements,
            image,
          }) => {
            return (
              <FadeIn>
                <li className="about-education__item">
                  <div className="about-education__image-c">{image}</div>
                  <div className="about-education__c">
                    <h1 className="about-education-title">{name}</h1>
                    <h1 className="about-education-qualification">
                      {qualification}
                    </h1>
                    {/* <h1 className="education-block-years">{years}</h1>  */}
                    <h2 className="about-education-grade">{grade}</h2>
                    <p className="about-education-desc">{desc}</p>
                    <ul className="about-education-list">
                      {notableAchievements.map((value) => {
                        return <li>{value}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              </FadeIn>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Education;
