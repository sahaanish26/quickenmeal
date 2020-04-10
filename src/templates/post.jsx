import React from "react";
import Helmet from "react-helmet";
import {graphql, Link} from "gatsby";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import PostCover from "../components/PostCover";
import PostInfo from "../components/PostInfo";
import SocialLinks from "../components/SocialLinks";
import PostSuggestions from "../components/PostSuggestions";
import PostIngredients from "../components/PostIngredients";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.scss";
import {
    TabsContainer,
    Tabs,
    Tab,
    FontIcon, List, ListItemControl, Checkbox, Avatar, Switch, ListItem, Button, Subheader, Divider
} from 'react-md';

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }



  render() {
    const { mobile } = this.state;
    const { location, pageContext } = this.props;
    const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
    const expanded = !mobile;
    const postOverlapClass = mobile ? "post-overlap-mobile" : "post-overlap";
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    /*Increasing the non mobile cover height to 500 for better view in the post page
*/
    const coverHeight = mobile ? 180 : 500;
    return (
        /*Keeping title header as home for all pages*/
      <Layout location={location} title={<Link style={{ textDecoration: "none" }} to={"/"}>Home</Link>}>
        <div className="post-page md-grid md-grid--no-spacing">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <PostCover
            postNode={postNode}
            coverHeight={coverHeight}
            coverClassName="md-grid md-cell--9 post-cover"
          />
         <div
            className={`md-grid md-cell--9 post-page-contents mobile-fix ${postOverlapClass}`}
          >
            <Card className="md-grid md-cell md-cell--12 post">
              <CardText className="post-body">
                <h1 className="md-display-2 post-header">{post.title}</h1>
                <PostInfo postNode={postNode} />
                <TabsContainer panelClassName="md-grid" colored >
                  <Tabs tabId="simple-tab"  mobile={mobile}>
                    <Tab label="Ingredients" icon={<FontIcon>local_grocery_store</FontIcon>}>
                        {/*Recipe ingredient details from the tag ingredients inside the .md file*/}
                        <PostIngredients ingredients={post.ingredients} />
                    </Tab>
                    <Tab label="Direction" icon={<FontIcon>subject</FontIcon>}>
                      {/*Recipe Direction details  inside the .md file*/}
                      <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                    </Tab>
                    <Tab label="Equipment" icon={<FontIcon>local_dining</FontIcon>}>
                      <h3>Equipment</h3>
                    </Tab>
                  </Tabs>
                </TabsContainer>
               {/* taking this content under Direction tab*/}
                {/*<div dangerouslySetInnerHTML={{ __html: postNode.html }} />*/}
              </CardText>
              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks
                  postPath={slug}
                  postNode={postNode}
                  mobile={mobile}
                />
              </div>
            </Card>
            <UserInfo
              className="md-grid md-cell md-cell--12"
              config={config}
              expanded={expanded}
            />
            <Disqus postNode={postNode} expanded={expanded} />
          </div>

          <PostSuggestions
            prevSlug={prevslug}
            prevTitle={prevtitle}
            nextSlug={nextslug}
            nextTitle={nexttitle}
          />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        description
        ingredients
      }
      fields {
        slug
        date
      }
    }
  }
`;
