import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Menu from "../components/menu";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Menu />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Layout>
);

export default SecondPage;
