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
      hero: true,
      readMore: false,
      viewContact: false,
      transition: "hero",
      windowWidth: 0
    };
    this.readMore = this.readMore.bind(this);
    this.readLess = this.readLess.bind(this);
  }

  readMore() {
    this.setState( { hero: false } );
    this.setState( { transition: "readMore" } );
    setTimeout(() => this.setState( { readMore: true } ), 250);
  }

  readLess() {
    this.setState( { readMore: false } );
    this.setState( { viewContact: false } );
    setTimeout(() => this.setState( { hero: true } ), 200);
    setTimeout(() => this.setState( { transition: "hero" } ), 250);
  }

  viewContact() {
    this.setState( { transition: "contact" } );
    setTimeout(() => this.setState( { viewContact: true } ), 250);
  }

  componentDidMount() {
    this.setState( {windowWidth: window.innerWidth} );
  }


  render() {

    const readMoreButton = (
      <Button clicked={!this.state.hero} text="Read More" onClick={() => this.readMore()}/>
    );

    const contactButton = (
      <Button clicked={!this.state.readMore} text="Contact" onClick={() => this.viewContact()}/>
    );

    const closeReadMore = (
      <div className="close-about-me" onClick={() => this.readLess()} >
        <span />
        <span />
      </div>
    );

    return(
      <div className="landing" id="landing">
        <div className="hero-container" >
          <Hero state={this.state} readMoreButton={readMoreButton} />
        </div>
        <ReadMore state={this.state} contactButton={contactButton} closeReadMore={closeReadMore}/>
        <LandingBackground state={this.state} />
      </div>
    );
  }
}

export default Landing;
