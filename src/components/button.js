import React, { useState } from "react";

import "./button.css";

function Button(props) {

  const [buttonState, changeButtonState] = useState("");

  var buttonText = `button-text${buttonState}`;
  var buttonBorderTop = `button-border button-border-top${buttonState}`;
  var buttonBorderLeft = `button-border button-border-left${buttonState}`;
  var buttonBorderBottom = `button-border button-border-bottom${buttonState}`;
  var buttonBorderRight = `button-border button-border-right${buttonState}`;

  function onClick() {
    changeButtonState("-clicked");
    props.onClick();
    setTimeout(() => changeButtonState(""), 1000);
  }

  function buttonHover(negated) { if (!negated) { changeButtonState("-hover"); } }

  function buttonLeave(negated) { if (!negated) { changeButtonState(""); } }

  return(
    <div
      className="button-wrapper"
      onMouseMove={() => buttonHover(props.clicked)}
      onMouseLeave={() => buttonLeave(props.clicked)}
      onClick={() => onClick()}
    >
      <button className={buttonText}>{props.text}</button>
      <div className={buttonBorderTop} />
      <div className={buttonBorderRight} />
      <div className={buttonBorderBottom} />
      <div className={buttonBorderLeft} />
    </div>
  );
}

export default Button;
