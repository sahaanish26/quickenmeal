import React from "react";
import Helmet from "react-helmet";
import {graphql, Link} from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const {tagBasePath} = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numberOfPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages ;
    const prevPageSub =  currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
    const prevPage = tagBasePath+ prevPageSub ;
    const nextPage = tagBasePath + (currentPage + 1).toString();


    return (
      <Layout
        location={this.props.location}
        title={<Link style={{ textDecoration: "none" }} to={"/"}>Home</Link>}
       /* Keeping title header as Home for all pages
        title={`Tagged in ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}*/
      >
        <div className="tag-container">
          <Helmet>
            <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/tags/${tag}`} />
          </Helmet>
          <PostListing postEdges={postEdges} />
          {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
          )}
          {Array.from({ length: numberOfPages }, (_, i) => (
              <Link key={`pagination-number${i+1}`} to={`${tagBasePath}${i === 0 ? "" : i+1 }`}>
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
