import React from "react";
import EducationData from "./EducationData";
import FadeIn from "../../FadeIn";

const Education = () => {
  return (
    <div className="education">
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
                <li className="education-block">
                  <div className="education-block-imagecontainer">{image}</div>
                  <div className="education-block-c">
                    <h1 className="education-block-title">{name}</h1>
                    <h1 className="education-block-qualification">
                      {qualification}
                    </h1>
                    {/* <h1 className="education-block-years">{years}</h1>  */}
                    <h2 className="education-block-grade">{grade}</h2>
                    <p className="education-block-desc">{desc}</p>
                    <ul className="education-block-list">
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
