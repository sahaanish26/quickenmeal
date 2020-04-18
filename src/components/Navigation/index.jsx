import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";
import ToolbarChildren from "../ToolbarChildren";

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";

    return (
      <NavigationDrawer
          drawerId="main-navigation"
          drawerTitle={config.siteTitle}
          toolbarTitle={LocalTitle}
          contentClassName="main-content"
        /*  navItems={navItems.map(({ divider, subheader, ...route }) => {
            if (divider || subheader) {
              return { divider, subheader, ...route };
            }
            return <Link {...route} />;
          })}*/
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          toolbarChildren={<ToolbarChildren/>}
        toolbarActions={<ToolbarActions config={config} />}
      >
        <div className="main-container">{children}</div>
        <Footer userLinks={footerLinks} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
