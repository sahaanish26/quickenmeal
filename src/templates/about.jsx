import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import config from "../../data/SiteConfig";
import {Link} from "gatsby";

class AboutPage extends Component {
  render() {
    const { categorySet, tagSet } = this.props.pageContext;

    return (
        /*keeping title header as home for all pages*/
      <Layout location={this.props.location} title={<Link style={{ textDecoration: "none" }} to={"/"}>Home</Link>}
              categorySet={categorySet} tagSet={tagSet} >
        <div className="about-container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
