import React from "react";
import AdditionalProjects from "./components/AdditionalProjects";
import FeaturedProjects from "./components/FeaturedProjects";
import "./projects.scss";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <FeaturedProjects />
      <AdditionalProjects />
    </div>
  );
};

export default Projects;
