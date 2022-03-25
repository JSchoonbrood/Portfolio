import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
// import { IoDocumentText } from "react-icons/io5";
import projects from "./ProjectData";
import "./projects.scss";

const Projects = () => {
  let counter = 0;
  return (
    <div className="page">
      <div className="featured-projects">
        <ul className="container">
          {projects
            .filter(({ featured }) => featured)
            .map(
              ({ title, image, description, code, live, tools}) => {
                counter += 1
                return (
                  <li>
                    <div className={counter % 2 ? "project-even" : "project-odd"}>
                      <h1 className="title">{title}</h1>
                      <img src={image} className="image" alt="placeholder"></img>
                      <p className="description">{description}</p>
                      <div className="links">
                        <a href={code}><VscGithubAlt /></a>
                        <a href={live}><FaExternalLinkAlt /></a>
                      </div>
                      <ul className="icons">
                        {tools.map((elem) => {
                          return <li>{elem}</li>;
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      </div>
      <div className="other-projects"></div>
    </div>
  );
};

export default Projects;
