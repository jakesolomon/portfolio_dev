// TODO: import "link" from Gatsby to use instead of <a> tag.
import React from "react";

import "./social.css";

import Codepen from "../images/codepen-icon.js";
import Linkedin from "../images/linkedin-icon.js";
import Gmail from "../images/gmail-icon.js";
import Github from "../images/github-icon.js";
import Upwork from "../images/upwork-icon.js";

function Social(props) {

  return(
    <ul className={"social-container-" + props.display} >
      <li className={"social-icon-" + props.display}><a href="https://github.com/jakesolomon" target="_blank" rel="noopener noreferrer" ><Github /></a></li>
      <li className={"social-icon-" + props.display}><a href="https://www.linkedin.com/in/jacobcsolomon/" target="_blank" rel="noopener noreferrer" ><Linkedin /></a></li>
      <li className={"social-icon-" + props.display}><a href="https://www.upwork.com/o/profiles/users/~01f9345fe562f336b9/?viewMode=1" target="_blank" rel="noopener noreferrer" ><Upwork /></a></li>
    </ul>
  );
}

export default Social;
