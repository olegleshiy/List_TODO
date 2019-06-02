// Core
import React, {Component} from 'react';

//Components
import Form from '../Form';
import Task from "../Task";

//Instruments
import Styles from '../Scheduler/styles.m.css'

export default class Section extends Component {
    render () {
        return (
            <section className={"Styles"}>
                <Form/>
                <div>
                    <ul>
                        <div>
                            <Task/>
                        </div>
                    </ul>
                </div>
            </section>

        );
    }
}