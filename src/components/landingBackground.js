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

  let readMore = 0;
  let contact = 0;
  let verticalLinesWidth = "75%";
  let horizontalLinesWidth = "40%";
  let centerDisplace = 0;
  let mouseMoveScale = 1.3;
  let spacerHeight = 240;
  let spacerOpacity = 1;
  if (props.state.transition == "hero") {
    let readMore = 0;
    contact = 0;
    let verticalLinesWidth = "75%";
    let horizontalLinesWidth = "65%";
    let centerDisplace = 0;
    let mouseMoveScale = 1.3;
    spacerHeight = 240;
    spacerOpacity = 1;
  }
  else if (props.state.transition == "readMore") {
    readMore = 1200;
    contact = 50;
    verticalLinesWidth = "70%";
    centerDisplace = "-40%";
    horizontalLinesWidth = "40%";
    mouseMoveScale = 1/2;
    spacerHeight = 0;
    spacerOpacity = 0;
  }
  else if (props.state.transition == "contact") {
    readMore = 1000;
    contact = 1200;
    verticalLinesWidth = "70%";
    centerDisplace = "-40%";
    horizontalLinesWidth = "40%";
    mouseMoveScale = 1/2;
    spacerHeight = 0;
    spacerOpacity = 0;
  }


  let lineLeft = `interactive-background line-left`;
  let lineRight = `interactive-background line-right`;
  let lineTop = `interactive-background line-top`;
  let lineBottom = `interactive-background line-bottom`;

  // Include the big JS if you want.
  // <img src= className="big-js" />

  // <div className="background-spacer" style={{height: spacerHeight, opacity: spacerOpacity}}/>
  // <div className={lineLeft} style={{top: 83 + (position.x - props.state.windowWidth/3)*mouseMoveScale/10, width: verticalLinesWidth, left: centerDisplace}}/>
  // <div className={lineRight} style={{bottom: 125 + (position.x - props.state.windowWidth/6)*mouseMoveScale/10, width: verticalLinesWidth, left: centerDisplace}}/>
  // <div className={lineTop} style={{left: props.state.windowWidth/12 + (position.y - 222)*mouseMoveScale/7, width: horizontalLinesWidth}}/>
  // <div className={lineBottom} style={{left: contact + 6*props.state.windowWidth/12 - (position.y - 222)*mouseMoveScale/7, width: horizontalLinesWidth,}}/>


  return(
    <div>
      <div className="background-spacer" style={{height: spacerHeight, opacity: spacerOpacity}}/>
      <div className={lineLeft} style={{left: 0 - readMore/10 + (position.x - props.state.windowWidth/3)*mouseMoveScale/10, width: verticalLinesWidth}}/>
      <div className={lineRight} style={{left: 320 - 3*readMore/4 + (-position.x - props.state.windowWidth/6)*mouseMoveScale/10, width: verticalLinesWidth}}/>
      <div className={lineTop} style={{left: readMore/2 + props.state.windowWidth/12 + (position.y - 222)*mouseMoveScale/7, width: horizontalLinesWidth}}/>
      <div className={lineBottom} style={{left: contact + 100 + readMore/4 + 6*props.state.windowWidth/12 - (position.y - 222)*mouseMoveScale/7, width: horizontalLinesWidth,}}/>
    </div>
  );
}

export default LandingBackground;
