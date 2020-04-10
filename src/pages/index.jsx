import React from "react";
import Helmet from "react-helmet";
import {graphql, Link} from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title={<Link style={{ textDecoration: "none" }} to={"/"}>Home</Link>} >
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitleAlt}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />

          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
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
