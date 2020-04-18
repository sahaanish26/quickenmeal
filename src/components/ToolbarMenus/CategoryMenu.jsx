/* ToolbarMenus */
import React from 'react';
import { FontIcon } from 'react-md';
import DocumentMenu from './DocumentMenu';
import "./Menu.scss";
import {Link} from "gatsby";
import Button from "react-md";


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

const CategoryMenu = props => <DocumentMenu {...props} id="Category" text="Category" menuItems={MENU_ITEMS} />;
export default CategoryMenu;