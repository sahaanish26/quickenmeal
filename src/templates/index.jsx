import React from "react";
import Helmet from "react-helmet";
import {graphql, Link} from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import Pagination from "../components/Pagination";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numberOfPages ,categorySet,tagSet } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={<Link style={{ textDecoration: "none" }} to={"/"}>Home</Link>} categorySet={categorySet} tagSet={tagSet}>
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitleAlt}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />

          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} />
          <Pagination from="index" basePath="" numberOfPages={numberOfPages} currentPage={currentPage} />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery ($skip: Int!, $limit: Int!){
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [fields___date], order: DESC }
    ){
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
            equipments
          }
        }
      }
    }
  }
`;

/*sample query with filter implementation
query IndexQuery {
  allMarkdownRemark(
      limit: 2000
  sort: { fields: [fields___date], order: DESC }
  filter: {frontmatter: {tags: {eq: "prawn"}}}

){
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
        }
      }
    }
  }
}*/
