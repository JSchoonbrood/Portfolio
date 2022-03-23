import React, { useState } from "react";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import Hobbies from "./hobbies/Hobbies";
import "./about.scss";

const About = () => {
	const buttons = [
		{ id: 0, content: "Skills" },
		{ id: 1, content: "Education" },
		{ id: 2, content: "Hobbies" },
	];

	const [activeComponent, setActiveComponent] = useState(0); // State 0 = Skills
	const [isActiveClass, setActiveClass] = useState(0);

	const handleClick = (component: number) => {
		setActiveComponent(component);
		setActiveClass(component);
	};

	const renderComponent = () => {
		return activeComponent === 0 ? ( <Skills />	
		) : activeComponent === 1 ? (	<Education />	
		) : activeComponent === 2 ? (<Hobbies />
		) : null;
	};

	return (
		<div className="about" id="about">
			<div className="about__desc">
				<div className="about__desc-img-container"></div>
				<div className="about__desc-bio">
					<h1>Driven software engineer looking for new opportunities</h1>
				</div>
			</div>

			<div className="about__container">
				<div className="select-indicator"></div>
				<div className="about__sections">
					{buttons.map((button) => {
						return (
							<button
								onClick={() => handleClick(button.id)}
								className={isActiveClass === button.id ? "active" : ""}
							>
								{button.content}
							</button>
						);
					})}
				</div>

				<div className="about__opt-info">
					{renderComponent()}
				</div>
			</div>
		</div>
	);
};

export default About;
