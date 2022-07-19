import React from 'react'
import projects from "./ProjectData";
import { NavLink } from "react-router-dom";

const AdditionalProjects = () => {
  return (
    <div className="other">
        <h1 className="other-title">Additional Projects</h1>
        <div>
        <NavLink to="/archive" className="archive-title"><h1>View The Archive</h1></NavLink>
        </div>
        <ul className="other__elements">
          {projects
            .filter(({ featured }) => !featured)
            .map(({ title, description, live, code, tools }) => {
              return (
                <li className="other__elements-items">
                  <h1 className="other__elements-title">{title}</h1>
                  <ul className="other__elements-links">
                    {code}
                    {live}
                  </ul>
                  <p className="other__elements-desc">{description}</p>

                  <ul className="other__elements-tools">
                    {tools.map((elem) => {
                      return (
                        <li className="other__elements-tools-item">{elem}</li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
  )
}

export default AdditionalProjects