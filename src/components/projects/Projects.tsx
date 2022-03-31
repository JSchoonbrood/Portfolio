import React from "react";
import projects from "./ProjectData";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="page">
      <div className="featured">
        <ul className="featured__elements">
          {projects
            .filter(({ featured }) => featured)
            .map(({ title, image, description, code, live, tools }, index) => {
              return (
                <li
                  className={
                    index % 2
                      ? "featured__elements-items project-left"
                      : "featured__elements-items project-right"
                  }
                >
                  <h1 className="featured__elements-title">{title}</h1>
                  <div className="featured__elements-image">
                    {image}
                  </div>
                  <p className="featured__elements-desc">{description}</p>
                  <div className="featured__elements-links">
                    {code}
                    {live}
                  </div>
                  <ul className="featured__elements-tools">
                    {tools.map((elem) => {
                      return (
                        <li className="featured__elements-tools-item">
                          {elem}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="other">
        <h1 className="other-title">Other Projects</h1>
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
    </div>
  );
};

export default Projects;
