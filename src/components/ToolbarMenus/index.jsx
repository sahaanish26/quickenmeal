import React from 'react';

import CategoryMenu from './CategoryMenu';
import "./Menu.scss";


const ToolbarMenus = () => (
    //taking out UL className="menus__google-docs__menus" otherwise the "category" menu was coming under HOME
    // in the toolbar of navigation
    <ul >
        <CategoryMenu />
    </ul>

);

export default ToolbarMenus;