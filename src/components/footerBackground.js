import React from "react";
import { useState, useEffect } from "react";

import "./footerBackground.css";

import bigJS from '../images/JS@2x.png';

function FooterBackground() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  // <img src={bigJS} className="footer-big-js" alt="Jake Solomon logo"/>

  return(
    <div className="background-footer-wrapper">
      <div className="interactive-footer-background footer-line-top" style={{right: -800 + (position.y)/4}}/>
      <div className="interactive-footer-background footer-line-bottom" style={{left: -800 + (position.y - 222)/4}}/>
    </div>
  );
}

export default FooterBackground;
