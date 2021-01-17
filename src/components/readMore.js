import React from "react";

import Contact from "./contact.js";

import "./readMore.css";

function ReadMore(props) {

  var aboutMeClass = "read-more-container";
  var aboutMeContent = "about-me-content";
  var contactClass = "contact-container about-me-dissapear";
  if (props.state.readMore) { aboutMeClass += " read-more-container-appear"; }
  if (props.state.transition != "readMore") { aboutMeContent += " about-me-dissapear"; }
  if (props.state.viewContact) { contactClass = "contact-container"; }

  return(
    <div className={aboutMeClass}>
      {props.closeReadMore}
      <div className={aboutMeContent}>
        <h2>About Me</h2>
        <p>I like making practical things that feel good to use.
        Naturally, I love front-end developing and repairing ill-maintained electric guitars.
        <br/><br/>
        My journey as a developer has occurred very organically: each
        lesson learned has first presented itself as a nasty roadblock in an interesting project.
        I specialize in React, JavaScript, and relational databases, but am always looking
        forward to the next lesson.
        </p>
        {props.contactButton}
      </div>
      <div className={contactClass}>
        <h2>Contact</h2>
        <Contact />
      </div>
    </div>
  );
}

export default ReadMore;
