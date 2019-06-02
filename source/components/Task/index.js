// Core
import React, { PureComponent } from 'react';

//Components
import Content from "../Content";
import Actions from "../Actions";

// Instruments
import Styles from './styles.m.css';


export default class Task extends PureComponent {
    _getTaskShape = ({
        id = this.props.id,
        completed = this.props.completed,
        favorite = this.props.favorite,
        message = this.props.message,
    }) => ({
        id,
        completed,
        favorite,
        message,
    });

    render () {
        return (
            <li className = { Styles.task }>
                <Content/>
                <Actions/>
            </li>
        )
    }
}
