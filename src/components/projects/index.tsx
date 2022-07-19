import React from "react";
import AdditionalProjects from "./components/AdditionalProjects";
import FeaturedProjects from "./components/FeaturedProjects";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <FeaturedProjects />
      <AdditionalProjects />
    </div>
  );
};

export default Projects;
