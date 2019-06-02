// Core
import React, { Component } from 'react';

//Components
import Checkbox from "../../theme/assets/Checkbox";

//Instruments
import Styles from '../Scheduler/styles.m.css';

export default class Footer extends Component {
    render () {
        return (
            <footer>
                <div>
                    <Checkbox/>
                </div>
                <span className={Styles.completeAllTasks}>Все задачи выполнены</span>
            </footer>
        );
    }
}