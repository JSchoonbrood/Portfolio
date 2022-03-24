import React from "react";

const Projects = () => {
	return (
		<div>
			Projects
			<div className="featured-projects">
				<div className="ASDTuning">
					<h1>ASDTuning</h1>
					<p>
						A web app for a US based business focused on extracting the most
						amount of performance from a vehicle through the sale of aftermarket
						parts and services such as engine management tuning.
					</p>
					<a href="#">Code</a>
					<a href="#">Live View</a>
					<ul>
						<li>HTML5</li>
						<li>SASS</li>
						<li>TS</li>
						<li>React</li>
					</ul>
				</div>
				<div className="EngineLogger">
					<h1>EngineLogger</h1>
					<p>
						A desktop application that provides a user interface to track
						current and previous jobs for engine builders using a relational
						database. Having spent time in the industry myself, available
						information is often conflicting and misinformed. This applcation
						aims to guide the user through each measurement that should be taken
						during engine builds and allows the user to be transparent with
						their customer base.
					</p>
					<a href="#">Code</a>
					<a href="#">Download</a>
					<ul>
						<li>Python</li>
						<li>SQLite3</li>
						<li>PySide2 (Qt)</li>
					</ul>
				</div>
				<div className="Vehicle Pollution Routing">
					<h1>Pollution Prediction</h1>
					<p>
						Created as part of my third year project @ The University of York.
						The aim of the overall project was to reduce overall pollution
						exposure for all methods of transport situated on roads. The project
						used machine learning to determine pollution levels for roads based
						on attributes that could be extracted from open-source vehicle
						routing apps. Artifical data extracted from a live simulation was
						used as a proof of concept to train and test the machine learning
						model. The results were promising and showed upto 50% reduction in
						pollution exposure over existing vehicle routing methods within a
						5minute car journey without any significant sacrifice of route
						quality (majority of the time, route quality was equal or improved).
					</p>
					<a href="#">Code</a>
					<a href="#">Report</a>
					<ul>
						<li>Python</li>
						<li>Tensorflow</li>
						<li>Sumo</li>
					</ul>
				</div>
			</div>
			<div className="other-projects"></div>
		</div>
	);
};

export default Projects;
