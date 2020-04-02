import React, { Component } from "react";
import UserLinks from "../UserLinks";
import "./ToolbarActions.scss";
import Search from "../Search";

class Toolbar extends Component {
  render() {
    const { config } = this.props;
    return (
      <div className="toolbar-actions">
          <div className="search-container">
              <Search config={config} />
          </div>
        <div className="userlinks-container">
          <UserLinks config={config} />
        </div>

      </div>
    );
  }
}

export default Toolbar;
