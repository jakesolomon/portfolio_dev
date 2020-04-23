import React from "react";

import Landing from "../components/landing";
import Layout from "../components/layout";
import Projects from "../components/projects";
import SEO from "../components/seo";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Landing />
    <Layout>
      <Projects />
    </Layout>
  </div>
);

export default IndexPage;
