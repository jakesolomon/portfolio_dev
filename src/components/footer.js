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
    </div>
  </footer>
);

export default Footer;
