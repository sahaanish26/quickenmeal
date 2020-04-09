import React, { Component } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
    WhatsappShareButton,
    EmailShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
    WhatsappIcon,
    EmailIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile ,postInfo } = this.props;
      let post ;
      /*Creating if else condition since this component is getting called from both post.jsx and postpreview.jsx. PostPreview provides
      postNode whereas post provides postInfo
*/
      if (typeof postInfo === 'undefined')
      {
          post = postNode.frontmatter;
      }
      else { post = postInfo;}

// Removing sitepath from urljoin otherwise giving invalid path
    const url = urljoin(config.siteUrl,postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");
    const renderShareCount = count => (
      <div className="share-count">{filter(count)}</div>
    );

    return (
      <div className="social-links">
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={post.description}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => renderShareCount(count)}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={post.description}
        >
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
          <WhatsappShareButton url={url} title={post.title}>
              <WhatsappIcon round size={iconSize} />
          </WhatsappShareButton>
          <EmailShareButton url={url} subject={post.title} body="Got this great recipe link:">
              <EmailIcon round size={iconSize} />
          </EmailShareButton>

      </div>
    );
  }
}

export default SocialLinks;
