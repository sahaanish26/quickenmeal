import React from "react";
import Helmet from "react-helmet";
import {graphql, Link} from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import Pagination from "../components/Pagination";
import config from "../../data/SiteConfig";
import {Avatar, Button, Cell, Grid} from "react-md";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const {tagBasePath} = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numberOfPages,categorySet, tagSet } = this.props.pageContext;

    return (
      <Layout
        location={this.props.location}
        title={<Link style={{ textDecoration: "none" }} to={"/"}>Home</Link>}
        categorySet={categorySet} tagSet={tagSet}
       /* Keeping title header as Home for all pages
        title={`Tagged in ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}*/
      >
        <div className="tag-container">
          <Helmet>
            <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/tags/${tag}`} />
          </Helmet>
          <PostListing postEdges={postEdges} />
          <Pagination from="tag" basePath={tagBasePath} numberOfPages={numberOfPages} currentPage={currentPage} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String , $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
