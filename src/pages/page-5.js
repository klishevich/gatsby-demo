import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Menu from "../components/menu";

const Page = ({ data }) => {
  const users = data.allRandomUser.edges;
  return (
    <Layout>
      <SEO title="Page 5" />
      <Menu />
      <h1>Page 5: Query Data Build Time</h1>
      <table>
        <tbody>
          <tr>
            <th />
            <th>Name</th>
            <th>Gender</th>
            <th>Photo</th>
          </tr>
          {users.map((user, i) => {
            const userData = user.node;
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{userData.name.first}</td>
                <td>{userData.gender}</td>
                <td>
                  <img src={userData.picture.medium} alt={userData.name.first}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export const query = graphql`
  query {
    allRandomUser {
      edges {
        node {
          gender
          name {
            title
            first
            last
          }
          picture {
            large
            medium
            thumbnail
          }
        }
      }
    }
  }
`;

export default Page;
