import React, { Component } from "react";
import "./ToolbarChildren.scss";
import ToolbarMenus from "../ToolbarMenus";

class ToolbarChildren extends Component {
  render() {
    //const { config } = this.props;
      const { categorySet,tagSet } = this.props;
    return (
      <div className="toolbar-children">
          <div className="ToolbarMenu-container">
              <ToolbarMenus categorySet={categorySet} tagSet={tagSet}/>
          </div>
      </div>
    );
  }
}

export default ToolbarChildren;
