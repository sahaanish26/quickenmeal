import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import SVGIcon from "react-md/lib/SVGIcons";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import moment from "moment";
import Media, { MediaOverlay } from "react-md/lib/Media";
import PostTags from "../PostTags";
import PostCover from "../PostCover";
import config from "../../../data/SiteConfig";
import "./PostPreview.scss";
import {CardActions, DialogContainer, TextField} from "react-md";
import SocialLinks from "../SocialLinks";




class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
      visible :false
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


  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    const slug = postInfo.path;
    /* eslint no-undef: "off" */
    const coverHeight = mobile ? 162 : 240;
    const { visible } = this.state;
    const actions = [];
    actions.push({ secondary: true, children: 'Close', onClick: this.hide });
    /*actions.push(<Button flat secondary onClick={this.hide}>Confirm</Button>);
*/
    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--12">
        <Link style={{ textDecoration: "none" }} to={postInfo.path}>
          <Media style={{ height: coverHeight, paddingBottom: "0px" }}>
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
            <MediaOverlay >
              <CardTitle  title={postInfo.title}  >
                <Button raised secondary className="md-cell--right">
                  Cook
                </Button>
              </CardTitle>
            </MediaOverlay>
          </Media>
        </Link>
          {/*   <CardTitle
          expander={expand}
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`Published on ${moment(postInfo.date).format(
            config.dateFormat
          )}`}
          subtitle={`${postInfo.timeToRead} min read`}
        />*/}
         <CardTitle
          avatar={<Avatar src={config.userAvatarSVG} role="presentation" />}
          title={postInfo.description}
        >
           <CardActions stacked={true} className="md-cell--right">
             <Button icon secondary tooltipLabel="Info" tooltipPosition="bottom" >information</Button>
             <div>
               <Button icon secondary tooltipLabel="Share" tooltipPosition="bottom" onClick={this.show}>share</Button>
               <DialogContainer
                   id="simple-action-dialog"
                   visible={visible}
                   onHide={this.hide}
                   actions={actions}
                   title={'Share The Recipe of::'+ postInfo.title}
               >
                 <SocialLinks
                     postPath={slug}
                     postInfo={postInfo}
                     mobile={mobile}
                 />
               </DialogContainer>
             </div>
             <Button icon secondary tooltipLabel="Rate" iconClassName="fa fa-star-o"  tooltipPosition="bottom"/>
           </CardActions>
         </CardTitle>

        {/*<CardText>
          <tbody>
          <tr><td><Avatar src={config.userAvatarSVG} role="presentation" className="md-cell--left"/></td>
            <tr> &nbsp;</tr>
          <td> {postInfo.description}</td>
          </tr>
          </tbody>
          <PostTags tags={postInfo.tags} />
        </CardText>*/}
      </Card>
    );
  }
}

export default PostPreview;
