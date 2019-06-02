// Core
import React, { Component } from 'react';

//Components
import Checkbox from "../../theme/assets/Checkbox";

//Instruments
import Styles from '../Task/styles.m.css';

export default class Content extends Component {
    render () {
        return (
            <div className={Styles.content}>
                <div className={Styles.toggleTaskCompletedState}>
                    <Checkbox/>
                </div>
                <input disabled maxLength="50" type="text" value="Первая задача"/>
            </div>
        );
    }
}