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
        <p>I like making practical things that
        feel good to use. My background in biology research and degree in
        math have naturally guided me as a developer to focus on data.<br/><br/>
        I spend happy hours mucking around with my projects, and I'm looking for more.
        Feel free to connect if there's something you'd like to work on together.</p>
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
