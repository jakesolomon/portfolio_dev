import React from "react";
import { useState, useEffect } from "react";

import "./inspectElement.css";

function InspectElement(props) {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [hoveredElementDisplay, setHoveredElementDisplay] = useState(null);

  const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
  window.addEventListener("mousemove", setFromEvent);
  window.onmouseover=function(e) {
      if (hoveredElement != null && e.target.tagName != "path" && e.target.id != "hov") {
        var outerHTML = e.target.outerHTML
        var innerHTML = e.target.innerHTML
        var text = outerHTML.replace(innerHTML,"")
        var display = text.replace(e.target.tagName.toLowerCase(), e.target.tagName.toLowerCase().concat("\n"))
        console.log(display)
        // console.log(e.target.tagName)
        // display = display.replace(" ", "/br")
        setHoveredElementDisplay(display)
        // hoveredElement.style.outline = "0px solid black";
      };
      setHoveredElement(e.target);
      e.target.style.outline = "1px solid black";
      e.target.style.transition = "0ms"
  };
  window.onmouseout=function(e) {
    e.target.style.outline = "0px solid black";
  }


  return(
    <div
      id="hov"
      className="cursor-text"
      style={{
      position: "absolute",
      top: position.y - 100,
      left: position.x + 10
    }}
    >{hoveredElement ? hoveredElementDisplay : "Landing"}
    </div>
  );
}

export default InspectElement;
