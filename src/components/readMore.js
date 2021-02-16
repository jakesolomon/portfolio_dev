import React from "react";

import Contact from "./contact.js";

import "./readMore.css";

function ReadMore(props) {

  var aboutMeClass = "read-more-container";
  var aboutMeContent = "about-me-content";
  var contactClass = "contact-container about-me-disappear";
  if (props.state.readMore) { aboutMeClass += " read-more-container-appear"; }
  if (props.state.transition != "readMore") { aboutMeContent += " about-me-disappear"; }
  if (props.state.viewContact) { contactClass = "contact-container"; }

  return(
    <div className={aboutMeClass}>
      {props.closeReadMore}
      <div className={aboutMeContent}>
        <h3>About Me</h3>
        <p style={{marginBottom: "0px"}}>I enjoy making practical things that feel good to use.
        Naturally, I love developing simple, intuitive interfaces and repairing ill-maintained electric guitars.
        <br/><br/>
        My journey as a developer has occurred very organically: each
        lesson learned has first presented itself as a nasty roadblock in an interesting project.
        I specialize in React, JavaScript, and relational databases, and am always looking
        forward to the next lesson.
        </p>
        <div style={{display: "inline-block", marginTop: "1.5rem"}}>
          {props.viewProjectsButton}
        </div>
        <div style={{display: "inline-block", marginLeft: "1rem"}}>
          {props.contactButton}
        </div>
      </div>
      <div className={contactClass}>
        <h2>Contact</h2>
        <Contact />
      </div>
    </div>
  );
}

export default ReadMore;
