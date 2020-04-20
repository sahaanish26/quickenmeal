import React, {Component} from 'react';

import CategoryMenu from './CategoryMenu';
import "./Menu.scss";


class ToolbarMenus extends Component{

render() {
    //const { config } = this.props;
    const { categorySet,tagSet } = this.props;
    return (
        <ul >
            <CategoryMenu categorySet={categorySet} tagSet={tagSet}/>
        </ul>
    );
}
}


export default ToolbarMenus;