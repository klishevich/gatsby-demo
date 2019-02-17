import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Menu from "../components/menu";

const FourthPage = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Page three" />
      <Menu />
      <h1>Page 4. Data from MD files</h1>
      { nodes.map(({node}) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <b>Created at {node.frontmatter.date}</b>
          <div>{node.excerpt}</div>
          <br/>
        </div>
      ))}
      <p>MD: {nodes.length}</p>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          id
          excerpt
          timeToRead
          html
          fileAbsolutePath
        }
      }
    }
  }
`;

export default FourthPage;
