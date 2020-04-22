import React from "react";

import "./projects.css";

import tutorstat from "../images/tutorstat.png";
import react from "../images/react.png";
import ruby from "../images/ruby.png";

const reactIcon = (
  <img className="software-icons" src={react} alt="react icon" />
);

const rubyIcon = (
  <img className="software-icons" src={ruby} alt="react icon" />
);

const tutorstatDescription = (
  <p className="project-description">
    <b>Tutorstat</b> is an internal data analytics app that shows insights about tutor and student performance.<br /><br />
    I'm developing this project to meet the needs of a growing test-prep center to help inform training policy and educate clients about the process.<br /><br />
    I use React for front-end. Data is processed in Ruby before served via Fetch API and displayed using React Vis.<br /><br />
    If you'd like to know more, send me a message. I'd love to chat about it.
  </p>
);

const Projects = () => (
  <div className="light projects-container">
    <h1>What I'm Working on</h1>
    <img className="project-image" src={tutorstat} alt="data analytics app" />
    <br />
    <p className="project">
      {tutorstatDescription}
    </p>
  </div>
);

export default Projects;
