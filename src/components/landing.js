import React, { Component } from "react";

import Hero from "./hero.js";
import ReadMore from "./readMore.js";
import LandingBackground from "./landingBackground.js";
import Button from "./button.js";

import "./landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.setState( {windowWidth: window.innerWidth} );
  }

  render() {

    const readMoreButton = (
      <Button clicked={!this.props.pageState.hero} text="About Me" onClick={() => this.props.readMore()}/>
    );

    const contactButton = (
      <Button clicked={!this.props.pageState.readMore} text="Contact" onClick={() => this.props.viewContact()}/>
    );

    const closeReadMore = (
      <div className="close-about-me" onClick={() => this.props.readLess()} >
        <span />
        <span />
      </div>
    );

    return(
      <div className="landing" id="landing">
        <div className="hero-container" >
          <Hero state={this.props.pageState} readMoreButton={readMoreButton} />
        </div>
        <ReadMore state={this.props.pageState} contactButton={contactButton} closeReadMore={closeReadMore}/>
        <LandingBackground state={this.props.pageState} windowWidth={this.state.windowWidth}/>
      </div>
    );
  }
}

export default Landing;
