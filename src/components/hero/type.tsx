import React from "react";
import TypeWriter from "typewriter-effect";

class Desc extends React.Component {
	render() {
		return (
			<TypeWriter
				options={{
					strings: [
						"Front-End Developer",
						"Computer Science Graduate",
						"Software Developer",
					],
					autoStart: true,
					loop: true,
					deleteSpeed: 45,
				}}
			/>
		);
	}
}

export default Desc;
