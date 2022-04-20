import React from "react";
import AdditionalProjects from "./components/AdditionalProjects";
import FeaturedProjects from "./components/FeaturedProjects";
import "./projects.scss";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="page">
      <FeaturedProjects />
      <AdditionalProjects />
      <div>
        <NavLink to="archive"><h1 className="archive-title">View The Archive</h1></NavLink>
      </div>
    </div>
  );
};

export default Projects;
