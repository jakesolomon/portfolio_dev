import React from "react";

import "./projects.css";

import tutorstat from "../images/tutorstat.png";
import goodweather from "../images/goodweather.png";
import react from "../images/react.png";
import ruby from "../images/ruby.png";

function Projects(props) {

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
      If you'd like to know more, <a href="#landing" onClick={props.straightToContact}>send me a message</a>. I'd love to chat about it.
    </p>
  );

  const goodWeatherDescription = (
    <p className="project-description">
      <a href="https://fair-weather.netlify.app/" target="_blank"><b>The Good Weather Map</b></a> is
      my take on the classic weather app project.<br /><br />
      It searches for states with clear skies and nice temparature, and
      highlights them on the US map. You can find the
      code <a href="https://github.com/jakesolomon/fair-weather" target="_blank">on my GitHub</a>.
    </p>
  );

  return(
    <div>
      <div className="projects-container">
        <h1>What I'm Working on</h1>
        <img className="project-image" src={tutorstat} alt="data analytics app" />
        <br />
        {tutorstatDescription}
      </div>
      <div className="projects-container">
        <img className="project-image" src={goodweather} alt="weather app" />
        <br />
        {goodWeatherDescription}
      </div>
    </div>
  );
}

export default Projects;
