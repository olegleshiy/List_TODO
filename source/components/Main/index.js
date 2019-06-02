// Core
import React, { Component } from 'react';

//Components
import Header from "../Header";
import Section from "../Section";
import Footer from "../Footer";

export default class Main extends Component {
    render () {
        return (
            <main>
                <Header/>
                <Section/>
                <Footer/>
            </main>
        );
    }
}