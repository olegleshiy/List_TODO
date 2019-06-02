// Core
import React, { Component } from 'react';

//Components
import Main from "../Main";

// Instruments
import Styles from './styles.m.css';
import { api } from '../../REST';


 // ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')


export default class Scheduler extends Component {
    render () {
        return (
            <section className ={ Styles.scheduler }>
                <Main/>
            </section>
        );
    }
}
