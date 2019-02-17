import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Menu from "../components/menu";

const ThirdPage = ({ data }) => (
  <Layout>
    <SEO title="Page three" />
    <Menu />
    <h1>Page 3. Data from config file</h1>
    <p>Author: {data.site.siteMetadata.testDataAuthor}</p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        testDataAuthor
      }
    }
  }
`;

export default ThirdPage;
