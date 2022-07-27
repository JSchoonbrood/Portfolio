import React from "react";
import TypeWriter from "typewriter-effect";

class Desc extends React.Component {
  render() {
    return (
      <TypeWriter
        options={{
          strings: [
            "Computer Science Grad",
            "Software Engineer",
            "Front-End Dev",
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
