import React from "react";

import "./projects.css";

import areaMockup from "../images/area_mockup.png";
import tutorstatMockup from "../images/tutorstat.png";
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




  const areaDescription = (
    <p className="project-description">
      <b>Area</b> is a location-sharing app that highlights user-generated content.<br/><br/>
      I developed this browser app in React and designed the database schema using <a href="https://hasura.io/cloud/" target="_blank">Hasura Cloud</a>.
      An accompanying native mobile app is in development, and both will be officially released in Spring 2021.<br/><br/>
      Area is also powered by <a href="https://stripe.com/" target="_blank">Stripe</a>, <a href="https://auth0.com/" target="_blank">Auth0</a>, <a href="https://cloudinary.com/" target="_blank">Cloudinary</a>, and <a href="https://developers.google.com/maps/documentation/javascript/overview" target="_blank">Google Maps API</a>.
      <br/><br/>
      If you'd like to know more, <a href="#landing" onClick={props.straightToContact}>send me a message</a>. I'd love to chat about it.
    </p>
  );

  const areaReview = (
    <p style={{fontStyle: "italic", margin: "0px 60px"}}>
      "Jake delivered incredible work on this Google Maps API development project
      and I enjoyed working with him. Very responsive, provided weekly
      detailed updates. He provided powerful insight in our brainstorms which
      left positive impacts on future designs and decisions." -Upwork Client
    </p>
  );

  const tutorstatDescription = (
    <p className="project-description">
      <b>Tutorstat</b> is an internal data analytics app that shows insights about tutor and student performance.<br/><br/>
      I'm developing this project to meet the needs of a growing test-prep center to help inform training policy and educate clients about the process.<br/><br/>
      I use React for front-end. Data is processed in Ruby before served via Fetch API and displayed using React Vis.<br/><br/>
    </p>
  );

  const goodWeatherDescription = (
    <p className="project-description">
      <a href="https://fair-weather.netlify.app/" target="_blank"><b>The Good Weather Map</b></a> is
      my take on a classic weather app API demo.<br/><br/>
      It searches for states with clear skies and nice temperatures, and
      highlights them on the US map. You can find the
      code <a href="https://github.com/jakesolomon/fair-weather" target="_blank">on my GitHub</a>.
    </p>
  );

  return(
    <div style={{marginBottom: "130px"}}>
      <div className="projects-container">
        <h1>What I'm Working on</h1>
        <img className="project-image" src={areaMockup} alt="location sharing app" />
        <br/>
        {areaDescription}
        {areaReview}
      </div>
      <div className="projects-container">
        <img className="project-image" src={tutorstatMockup} alt="data analytics app" />
        <br/>
        {tutorstatDescription}
      </div>
      <div className="projects-container">
        <h2>Bits and Bytes</h2>
        <img className="project-image" src={goodweather} alt="weather app" />
        <br/>
        {goodWeatherDescription}
      </div>
    </div>
  );
}

export default Projects;
