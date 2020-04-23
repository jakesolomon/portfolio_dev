import React from "react";
import { useState, useEffect } from "react";

import "./landingBackground.css";

function LandingBackground(props) {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  var windowWidth = props.windowWidth;


  var lineTopStart;
  var lineRightStart;
  var lineBottomStart;
  var lineLeftStart;

  var lineLeftHeight;
  var lineRightHeight;

  var mouseMoveScale;

  if (props.state.transition == "hero") {
    lineTopStart = windowWidth*0.05;
    lineRightStart = windowWidth*0.17;
    lineBottomStart = 0;
    lineLeftStart = windowWidth*0.17;

    lineLeftHeight = "25%";
    lineRightHeight = "15%";

    mouseMoveScale = 1;
  }
  else if (props.state.transition == "readMore") {
    lineTopStart = windowWidth*0.50;
    lineRightStart = windowWidth*0.33;
    lineBottomStart = -windowWidth*0.2;
    lineLeftStart = windowWidth*0.08;

    lineLeftHeight = "60%";
    lineRightHeight = "60%";

    mouseMoveScale = 0.5;
  }
  else if (props.state.transition == "contact") {
    lineTopStart = windowWidth*0.45;
    lineRightStart = windowWidth*0.28;
    lineBottomStart = -windowWidth*0.7;
    lineLeftStart = windowWidth*0.05;

    lineLeftHeight = "60%";
    lineRightHeight = "60%";

    mouseMoveScale = 0.5;
  }

  return(
    <div className="background-container">
      <div
        className="interactive-background line-top"
        style={{left: lineTopStart + position.y/8*mouseMoveScale}}
      />
      <div
        className="interactive-background line-right"
        style={{right: lineRightStart+ position.x/15*mouseMoveScale, height: lineRightHeight}}
      />
      <div
        className="interactive-background line-bottom"
        style={{right: lineBottomStart+ position.y/8*mouseMoveScale}}
      />
      <div
        className="interactive-background line-left"
        style={{left: lineLeftStart+ position.x/15*mouseMoveScale, height: lineLeftHeight}}
      />
    </div>
  );
}

export default LandingBackground;
