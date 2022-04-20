import React from "react";
import AdditionalProjects from "./components/AdditionalProjects";
import FeaturedProjects from "./components/FeaturedProjects";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="page">
      <FeaturedProjects />
      <AdditionalProjects />
      <div>
        <h1>View The Archive</h1>
      </div>
    </div>
  );
};

export default Projects;
