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
                  <div className="flex-column">
                      <h1 className="featured__elements-title">{title}</h1>
                      <p className="featured__elements-desc">{description}</p>
                      <ul className="featured__elements-tools">
                        {tools.map((elem) => {
                          return (
                            <li className="featured__elements-tools-item">
                              {elem}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="featured__elements-links">
                        {code}
                        {live}
                      </div>
                  </div>
                  <span className="featured__elements-image-filter"></span>
                  <div className="featured__elements-image">{image}</div>
                </li>
              );
            }
          )}
      </ul>
    </div>
  )
}

export default FeaturedProjects