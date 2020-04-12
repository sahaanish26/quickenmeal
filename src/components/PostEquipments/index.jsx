import React, {Component} from "react";
import {Avatar, Button, FontIcon, List, ListItem, Tab} from "react-md";
import {ceil} from "lodash/math";
import {Link} from "gatsby";



const InfoIcon = () => <FontIcon secondary >info</FontIcon>;
const CLASS_NAME = 'md-cell md-cell--6 md-paper md-paper--1';

function extractQuantity(equipment) {
    console.log("inside extractQuantity ");
    let n = equipment.indexOf("-");
    return  equipment.slice(n);
}

function extractName(equipment) {
    console.log("inside extractName ");
    let n = equipment.indexOf("-");
    return  equipment.slice(0,n);
}




class PostEquipments extends Component {
    render() {
        const { equipments } = this.props;
        console.log(equipments);
        const equipmentsListOne=equipments.slice(0,ceil(equipments.length/2));
        const equipmentsListTwo=equipments.slice(ceil(equipments.length/2));
        console.log(equipmentsListOne);
        console.log(equipmentsListTwo);
        function buy(url) {
            console.log("inside buy function");
            window.open(url, '_blank');
        }
        return (
            <div className="md-grid md-cell md-cell--12">
                <List className={CLASS_NAME}>
                    {equipmentsListOne.map(equipment => (
                        <ListItem
                            leftAvatar={<FontIcon secondary >chevron_right</FontIcon>}
                            /*rightIcon={<InfoIcon />}*/
                            primaryText={extractName(equipment)}
                            secondaryText={extractQuantity(equipment)}
                        >
                            <a href="https://www.w3docs.com/?tag=quickenmeal-20" target="_blank"><Button flat secondary swapTheming>BUY</Button></a>
                            </ListItem>
                    ))}
                </List>
                <List className={CLASS_NAME}>
                    {equipmentsListTwo.map(equipment => (
                        <ListItem
                            leftAvatar={<Avatar suffix="blue" icon={<FontIcon>chevron_right</FontIcon>} />}
                            /*rightIcon={<InfoIcon />}*/
                            primaryText={extractName(equipment)}
                            secondaryText={extractQuantity(equipment)}
                        >
                        <a href="https://www.w3docs.com/?tag=quickenmeal-20" target="_blank"><Button flat secondary swapTheming>BUY</Button></a>
                        </ListItem>
                    ))}
                </List>
               {/* For Testing
                <List className={CLASS_NAME}>
                    <ListItem
                        leftAvatar={<Avatar suffix="blue" icon={<FontIcon>chevron_right</FontIcon>} />}
                        rightIcon={<InfoIcon />}
                        primaryText="Vacation itinerary"
                        secondaryText="Jan 20, 2014"
                    />
                    <ListItem
                        leftAvatar={<Avatar suffix="amber" icon={<FontIcon>chevron_right</FontIcon>} />}
                        rightIcon={<InfoIcon />}
                        primaryText="Kitchen remodel"
                        secondaryText="Jan 10, 2014"
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FontIcon>chevron_right</FontIcon>} />}
                        rightIcon={<InfoIcon />}
                        primaryText="money deposit"
                        secondaryText="Jan 10, 2014"
                    />
                </List>
                <List className={CLASS_NAME}>
                    <ListItem
                        leftAvatar={<Avatar suffix="blue" icon={<FontIcon>chevron_right</FontIcon>} />}
                        rightIcon={<InfoIcon />}
                        primaryText="Vacation itinerary"
                        secondaryText="Jan 20, 2014"
                    />
                    <ListItem
                        leftAvatar={<Avatar suffix="amber" icon={<FontIcon>chevron_right</FontIcon>} />}
                        rightIcon={<InfoIcon />}
                        primaryText="Kitchen remodel"
                        secondaryText="Jan 10, 2014"
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FontIcon>chevron_right</FontIcon>} />}
                        rightIcon={<InfoIcon />}
                        primaryText="money deposit"
                        secondaryText="Jan 10, 2014"
                    />



                </List>*/}
            </div>
        );
    }
}

export default PostEquipments;