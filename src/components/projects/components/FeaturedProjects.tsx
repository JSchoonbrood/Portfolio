import React from 'react'
import projects from "./ProjectData";

const FeaturedProjects = () => {
  return (
    <div className="featured">
        <h1 className="featured-title">Featured Projects</h1>
        <ul className="featured__elements">
          {projects
            .filter(({ featured }) => featured)
            .map(
              (
                { title, image, description, code, live, tools, status },
                index
              ) => {
                return (
                  <li
                    className={
                      "featured__elements-items" +
                      (index % 2 ? " project-left" : " project-right")
                    }
                  >
                    <div className="featured__elements-title">
                      <h1 className="featured__elements-title-text">{title}</h1>
                      <div className="featured__elements-title-status">
                        {status ? (
                          <span className="dot-green tooltip">
                            <span className="tooltiptext">Project Completed</span>
                          </span>
                        ) : (
                          <span className="dot-red tooltip">
                            <span className="tooltiptext">Project Under Development</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="featured__elements-status"></span>
                    <span className="featured__elements-image-filter"></span>
                    <div className="featured__elements-image">{image}</div>
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
              }
            )}
        </ul>
      </div>
  )
}

export default FeaturedProjects