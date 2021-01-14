import React, { Component } from "react";

import Landing from "../components/landing";
import Projects from "../components/projects";
import Layout from "../components/layout";
// import SEO from "../components/seo";

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      hero: true,
      readMore: false,
      viewContact: false,
      transition: "hero",
    };
    this.readMore = this.readMore.bind(this);
    this.readLess = this.readLess.bind(this);
    this.viewContact = this.viewContact.bind(this);
    this.straightToContact = this.straightToContact.bind(this);
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

  straightToContact() {
    this.setState( { transition: "contact" } );
    this.setState( { hero: false } );
    this.setState( { readMore: true } );
    this.setState( { viewContact: true } );
  }

  render() {
    return(
      <div>
        <Landing
          readMore={this.readMore}
          readLess={this.readLess}
          viewContact={this.viewContact}
          pageState={this.state}
        />
        <Layout>
          <Projects straightToContact={this.straightToContact} />
        </Layout>
      </div>
    );
  }
}

export default IndexPage;
