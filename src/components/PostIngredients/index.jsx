import React, {Component} from "react";
import {Avatar, FontIcon, List, ListItem, Tab} from "react-md";
import {ceil} from "lodash/math";



const InfoIcon = () => <FontIcon secondary >info</FontIcon>;
const CLASS_NAME = 'md-cell md-cell--6 md-paper md-paper--1';

function extractQuantity(ingredient) {
    console.log("inside extractQuantity ");
    let n = ingredient.indexOf("-");
    return  ingredient.slice(n);
}

function extractName(ingredient) {
    console.log("inside extractName ");
    let n = ingredient.indexOf("-");
    return  ingredient.slice(0,n);
}


class PostIngredients extends Component {
    render() {
        const { ingredients } = this.props;
        console.log(ingredients);
        const ingredientsListOne=ingredients.slice(0,ceil(ingredients.length/2));
        const ingredientsListTwo=ingredients.slice(ceil(ingredients.length/2));
        console.log(ingredientsListOne);
        console.log(ingredientsListTwo);
        return (
            <div className="md-grid md-cell md-cell--12">
                <List className={CLASS_NAME}>
                    {ingredientsListOne.map(ingredient => (
                        <ListItem
                            leftAvatar={<FontIcon secondary >chevron_right</FontIcon>}
                            rightIcon={<InfoIcon />}
                            primaryText={extractName(ingredient)}
                            secondaryText={extractQuantity(ingredient)}
                        />
                    ))}
                </List>
                <List className={CLASS_NAME}>
                    {ingredientsListTwo.map(ingredient => (
                        <ListItem
                            leftAvatar={<FontIcon secondary>chevron_right</FontIcon>}
                            rightIcon={<InfoIcon />}
                            primaryText={extractName(ingredient)}
                            secondaryText={extractQuantity(ingredient)}
                        />
                    ))}
                </List>
            </div>
        );
    }
}

export default PostIngredients;