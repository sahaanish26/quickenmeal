/* ToolbarMenus */
import React, {Component} from 'react';
import { FontIcon } from 'react-md';
import DocumentMenu from './DocumentMenu';
import "./Menu.scss";
import {Link} from "gatsby";


const _ = require("lodash");
const languages = ['English','Spanish','French','German','Bengali'];

const DIVIDER = { divider: true };
const ICON_TILE_CLASS_NAME = 'menus__google-docs__menu-icon';

const MENU_ITEMS = [

    {
        primaryText: 'Cuisine',
        tileClassName: ICON_TILE_CLASS_NAME,
        /*nestedListStyle: { width: 240 },*/
        nestedItems: [
            {
                primaryText: "indo-chinese",
                component: Link,
                to: "/categories/indo-chinese/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            DIVIDER,
            {
                primaryText: "bengali",
                component: Link,
                to: "/categories/bengali/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            DIVIDER,
            {
                primaryText: "mughlai",
                component: Link,
                to: "/categories/mughlai/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
        ],
    },
    DIVIDER,
    {
        primaryText: 'Ingredient',
        tileClassName: ICON_TILE_CLASS_NAME,
        nestedItems: [
            {
                primaryText: "shrimp/prawn",
                component: Link,
                to: "/tags/prawn",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            {
                primaryText: "chicken",
                component: Link,
                to: "/tags/chicken",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            {
                primaryText: "fish",
                component: Link,
                to: "/tags/fish",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            {
                primaryText: "goat",
                component: Link,
                to: "/tags/goat",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
        ]
    },
    DIVIDER,
    {
        primaryText: 'Type',
        tileClassName: ICON_TILE_CLASS_NAME,
        nestedItems: [
            {
                primaryText: "lunch",
                component: Link,
                to: "/tags/lunch/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            {
                primaryText: "breakfast",
                component: Link,
                to: "/tags/breakfast/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            {
                primaryText: "snacks",
                component: Link,
                to: "/tags/breakfast/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
        ]
    },
    DIVIDER,
    {
        primaryText: 'Theme',
        tileClassName: ICON_TILE_CLASS_NAME,
        nestedItems: [
            {
                primaryText: "birthday",
                component: Link,
                to: "/tags/birthday/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            {
                primaryText: "durgapuja",
                component: Link,
                to: "/tags/durgapuja/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
            {
                primaryText: "New Year",
                component: Link,
                to: "/tags/new-year/",
                tileClassName: ICON_TILE_CLASS_NAME,
            },
        ]
    },

];


class CategoryMenu extends Component{
    render() {
        //const { config } = this.props;
        // IF variables MENU_ITEMS_CLONE,cuisineNestedItems are not initialized as a local variable inside render, a fatal bug will be
        //showing up in the screen.The list will keep on getting added for each render and the menu will show incremental addition instead of
        //fixed number
        const MENU_ITEMS_CLONE = [];
        const cuisineNestedItems = [];
        const typeNestedItems =[];
        const { categorySet,tagSet } = this.props;
        console.log("categorySet inside CategoryMenu "+categorySet);
        function createMenu() {
            categorySet.forEach(category => {
                cuisineNestedItems.push({
                    primaryText: category,
                    component: Link,
                    to: `/categories/${_.kebabCase(category)}`,
                    tileClassName: ICON_TILE_CLASS_NAME
                });
            });
            console.log("cuisineNestedItems inside CategoryMenu "+cuisineNestedItems);
            tagSet.forEach(tag => {
                typeNestedItems.push({
                    primaryText: tag,
                    component: Link,
                    to: `/tags/${_.kebabCase(tag)}`,
                    tileClassName: ICON_TILE_CLASS_NAME
                });
            });
            console.log("typeNestedItems inside CategoryMenu "+typeNestedItems);

            MENU_ITEMS_CLONE.push(
                {primaryText: 'Cuisine',
                tileClassName: ICON_TILE_CLASS_NAME,
                nestedItems:cuisineNestedItems
                 },
                DIVIDER,
                {primaryText: 'Type',
                    tileClassName: ICON_TILE_CLASS_NAME,
                    nestedItems:typeNestedItems
                },
                )
            console.log("MENU_ITEMS_CLONE inside CategoryMenu "+MENU_ITEMS_CLONE.toString());
            console.log("MENU_ITEMS inside CategoryMenu "+MENU_ITEMS);


            return MENU_ITEMS_CLONE ;
        }

        return (
             <DocumentMenu  id="Category" text="Category" menuItems={createMenu()} />
        );
    }
}
export default CategoryMenu;