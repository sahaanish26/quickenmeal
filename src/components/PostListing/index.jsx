import React from "react";
import PostPreview from "../PostPreview";
import {Cell} from "react-md";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        description: postEdge.node.frontmatter.description
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--center">
        <div className="md-grid md-cell--12 mobile-fix">
          {postList.map(post => <Cell size={4}>
            <PostPreview key={post.title} postInfo={post} />
           </Cell> )}
        </div>
      </div>
    );
  }
}

export default PostListing;
