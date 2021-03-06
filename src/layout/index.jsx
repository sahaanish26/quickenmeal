import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import { BrowserRouter } from 'react-router-dom';

export default  class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (

      <Navigation config={config} LocalTitle={this.props.title} categorySet={this.props.categorySet} tagSet={this.props.tagSet}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <meta name="google-site-verification" content={config.siteVerification} />

          </Helmet>
          {children}
        </div>
      </Navigation>

    );
  }
};
