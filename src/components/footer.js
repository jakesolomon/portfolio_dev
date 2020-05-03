import React from "react";

import FooterBackground from "./footerBackground.js";
import Social from "./social.js";

import "./footer.css";

// Add at end for interactive background: <div className="footer-background-wrapper"><FooterBackground /></div>

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <Social display="horizontal"/>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>.
      Site design ripped off from
      {` `}
      <a href="http://riccardozanutta.com/" target="_blank" rel="noopener noreferrer">Riccardo Zanutta</a>.
    </div>
  </footer>
);

export default Footer;
