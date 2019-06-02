// Core
import React, { Component } from 'react';

//Components
import Star from "../../theme/assets/Star";
import Edit from "../../theme/assets/Edit";
import Remove from "../../theme/assets/Remove";

//Instruments
import Styles from '../Task/styles.m.css';

export default class Actions extends Component {
    render () {
        return (
            <div className={Styles.actions}>
                <div className={Styles.toggleTaskFavoriteState}>
                    <Star/>
                </div>
                <div className={Styles.updateTaskMessageOnClick}>
                    <Edit/>
                </div>
                <div>
                    <Remove/>
                </div>
            </div>
        );
    }
}