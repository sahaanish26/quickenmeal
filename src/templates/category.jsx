import React from "react";
import Helmet from "react-helmet";
import {graphql, Link} from "gatsby";
import PostListing from "../components/PostListing";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Pagination from "../components/Pagination";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const {categoryBasePath} = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numberOfPages } = this.props.pageContext;


    return (
      <Layout
        location={this.props.location}
        title={<Link style={{ textDecoration: "none" }} to={"/"}>Home</Link>}
        /*Keeping title header as Home for all pages
        title={category.charAt(0).toUpperCase() + category.slice(1)}*/
      >
        <div className="category-container">
          <Helmet>
            <title>
              {`Posts in category "${category}" | ${config.siteTitle}`}
            </title>
            <link
              rel="canonical"
              href={`${config.siteUrl}/categories/${category}`}
            />
          </Helmet>
          <PostListing postEdges={postEdges} />
          <Pagination from="category" basePath={categoryBasePath} numberOfPages={numberOfPages} currentPage={currentPage} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            description
            ingredients
          }
        }
      }
    }
  }
`;
