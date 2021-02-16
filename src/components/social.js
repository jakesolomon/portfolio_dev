// TODO: import "link" from Gatsby to use instead of <a> tag.
import React from "react";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'



import "./social.css";

import Codepen from "../images/codepen-icon.js";
import Linkedin from "../images/linkedin-icon.js";
import Gmail from "../images/gmail-icon.js";
import Github from "../images/github-icon.js";
import Upwork from "../images/upwork-icon.js";

function Social(props) {

  const [emailToolTipStyles, setEmailToolTipStyles] = useState({ width: "0px", padding: "0px" });
  const [emailText, setEmailText] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const getEmail = () => {

    console.log(emailToolTipStyles)

    if (emailToolTipStyles.width != "0px") {
      setEmailToolTipStyles({width: "0px", padding: "0px" });
    } else {
      setEmailToolTipStyles({width: "235px", padding: "0px 15px" });

      fetch('https://api.github.com/users/jakesolomon', {
        headers: {
          'Accept' : 'application/vnd.github.v3+json',
          'Authorization': 'token ' + process.env.GATSBY_GITHUB_PERSONALACCESSTOKEN
        }})
        .then(response => response.json())
        .then(data => {
          setEmailText(data.email);
          // emailToolTipStyles = {width: "200px"}
        })
        .catch(error => console.error(error));
    }

  }

  return(
    <ul className={"social-container-" + props.display} >
      <li className={"social-icon-" + props.display}><a href="https://github.com/jakesolomon" target="_blank" rel="noopener noreferrer" ><Github /></a></li>
      <li className={"social-icon-" + props.display}><a href="https://www.linkedin.com/in/jacobcsolomon/" target="_blank" rel="noopener noreferrer" ><Linkedin /></a></li>
      <li className={"social-icon-" + props.display}><a href="https://www.upwork.com/o/profiles/users/~01f9345fe562f336b9/?viewMode=1" target="_blank" rel="noopener noreferrer" ><Upwork /></a></li>
      <li className={"social-icon-" + props.display}>
        <div className={"email-tool-tip email-tool-tip-" + props.display} style={emailToolTipStyles} >
          {emailText}
          {!emailCopied ?
            <CopyToClipboard text={emailText}
              onCopy={() => setEmailCopied(true)}>
              <FontAwesomeIcon icon={faClipboard} style={{marginLeft: "10px", cursor: "pointer"}}/>
            </CopyToClipboard>
            :
            <FontAwesomeIcon icon={faClipboardCheck} style={{marginLeft: "10px"}}/>
          }
        </div>
        <a onClick={() => getEmail()} target="_blank" rel="noopener noreferrer" ><Gmail /></a>
      </li>
    </ul>
  );
}

export default Social;
