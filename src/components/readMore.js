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
        <p>I write code because it’s fun. I like making practical things that
        feel good to use. With a background in biology research and a degree in
        math, data analysis and interpretation have naturally become my focus.<br/><br/>
        I spend happy hours mucking around with my projects. It would be nice
        to get paid for one.</p>
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
