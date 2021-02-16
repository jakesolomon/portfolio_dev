import React from "react";
import { useState, useEffect } from "react";

import "./landingBackground.css";

function LandingBackground(props) {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true)
  // const [hoveredElement, setHoveredElement] = useState(null);
  // const [hoveredElementDisplay, setHoveredElementDisplay] = useState(null);

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    setTimeout(() => {  setLoading(false); }, 600);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

// custom cursor





// end

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
    lineRightStart = windowWidth*0.13;
    lineBottomStart = windowWidth*0.05;
    lineLeftStart = windowWidth*0.13;

    lineLeftHeight = "25%";
    lineRightHeight = "17%";

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
    <div className="background-container" >
      <div
        className="interactive-background line-top"
        style={{left: lineTopStart + position.y/12*mouseMoveScale}}
      />
      <div
        className="interactive-background line-right"
        style={{right: lineRightStart+ position.x/35*mouseMoveScale, height: lineRightHeight}}
      />
      <div
        className="interactive-background line-bottom"
        style={{right: lineBottomStart+ position.y/12*mouseMoveScale}}
      />
      <div
        className="interactive-background line-left"
        style={{left: lineLeftStart+ position.x/35*mouseMoveScale, height: lineLeftHeight}}
      />
      <div
        className="landing-to-projects-indicator"
        style={props.state.transition != "hero" || loading ? {opacity: 0} : {opacity: 1}}
      >
        <p>Projects</p>
        <div className="landing-to-projects-line"/>
      </div>
    </div>
  );
}

export default LandingBackground;
