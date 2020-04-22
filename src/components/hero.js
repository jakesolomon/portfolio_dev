import React from "react";

import "./hero.css";

import Social from "./social.js";

function Hero(props) {

  var disappear = "";
  if (!props.state.hero) { disappear = "disappear"; }

  var hero = `hero ${disappear}`;
  var heroTitle = `hero-title ${disappear}`;
  var heroSubtitle = `hero-subtitle ${disappear}`;

  return(
    <div>
      <div className={hero} >
        <h1 className={heroTitle} >Jake Solomon</h1>
        <h4 className={heroSubtitle} >Front-End Developer and Analytics Engineer</h4>
        {props.readMoreButton}
        </div>
      <div className={disappear} >
        <Social display="vertical"/>
      </div>
    </div>
  );
}

export default Hero;
