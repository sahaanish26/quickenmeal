import React from "react";
import Helmet from "react-helmet";
import {graphql, Link} from "gatsby";
import PostListing from "../components/PostListing";
import Layout from "../layout";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const {categoryBasePath} = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numberOfPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages ;
    const prevPageSub =  currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
    const prevPage = categoryBasePath+ prevPageSub ;
    const nextPage = categoryBasePath + (currentPage + 1).toString();

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
          {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
          )}
          {Array.from({ length: numberOfPages }, (_, i) => (
              <Link key={`pagination-number${i+1}`} to={`${categoryBasePath}${i === 0 ? "" : i+1 }`}>
                {i+1}
              </Link>
          ))}
          {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
          )}
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
