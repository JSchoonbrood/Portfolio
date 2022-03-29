import React from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
// import { IoDocumentText } from "react-icons/io5";
import projects from "./ProjectData";
import "./projects.scss";

const Projects = () => {
	return (
		<div className="page">
			<div className="featured-projects">
				<ul className="container">
					{projects
						.filter(({ featured }) => featured)
						.map(({ title, image, description, code, live, tools }, index) => {
							return (
								<li>
									<div className={index % 2 ? "project-left" : "project-right"}>
										<h1 className="title">{title}</h1>
										{image}
										<p className="description">{description}</p>
										<div className="links">
											<a href={code}>
												<VscGithubAlt />
											</a>
											{live}
										</div>
										<ul className="icons">
											{tools.map((elem) => {
												return <li>{elem}</li>;
											})}
										</ul>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
			<div className="other-projects">
        <h1 className="other-projects-title">Other Projects</h1>
				<ul className="container">
					{projects
						.filter(({ featured }) => !featured)
						.map(({ title, description, live, tools }) => {
							return (
								<li className="other-projects-items">
									<h1>{title}</h1>
									<p>{description}</p>

									{/* <a href={live}>
										{live}<FaExternalLinkAlt />
									</a> */}

									<ul className="icons">
										{tools.map((elem) => {
											return <li>{elem}</li>;
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
