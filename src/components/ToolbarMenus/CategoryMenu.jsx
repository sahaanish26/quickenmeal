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
        nestedItems: [ {
            primaryText: "indo-chinese",
            component: Link,
            to: "/categories/indo-chinese/",
            tileClassName: ICON_TILE_CLASS_NAME,
        }, 'Spreadsheet', 'Presentation', 'Form', 'Drawing', 'From template...'],
    },
     {
        primaryText: 'Ingredient',
         tileClassName: ICON_TILE_CLASS_NAME,
         nestedItems: [ {
             primaryText: "indo-chinese",
             component: Link,
             to: "/categories/indo-chinese/",
             tileClassName: ICON_TILE_CLASS_NAME,
         }, 'Spreadsheet', 'Presentation', 'Form', 'Drawing', 'From template...']
     },
     {
        primaryText: 'Move to...',
        tileClassName: ICON_TILE_CLASS_NAME,
        leftIcon: <FontIcon>folder</FontIcon>,
    }, {
        primaryText: 'Move to trash',
        tileClassName: ICON_TILE_CLASS_NAME,
        leftIcon: <FontIcon>delete</FontIcon>,
    }, DIVIDER, {
        primaryText: 'See revision history',
        rightIcon: `+H`,
    }, {
        primaryText: 'Language',
        nestedItems: languages,
        nestedListStyle: { width: 240 },
    }, DIVIDER, {
        primaryText: 'Download as...',
        nestedItems: [
            'Microsoft Word (.docx)',
            'OpenDocument Format (.odt)',
            'Rich Text Format (.rtf)',
            'PDF Document (.pdf)',
            'Plain Text (.txt)',
            'Web Page (.html, zipped)',
            'EPUB Publication (.epub)',
        ],
    },
    'Publish to the web...',
    'Email collaborators...',
    'Email as attachment...', DIVIDER,
    'Document Details...',
    'Page setup...', {
        primaryText: 'Print',
        tileClassName: ICON_TILE_CLASS_NAME,
        leftIcon: <FontIcon>print</FontIcon>,
        rightIcon: `+P`,
    },
];

const CategoryMenu = props => <DocumentMenu {...props} id="Category" text="Category" menuItems={MENU_ITEMS} />;
export default CategoryMenu;