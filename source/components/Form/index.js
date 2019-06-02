// Core
import React, { Component } from 'react';


export default class Form extends Component {
    render () {
        return (
            <form>
                <input maxLength="50" type="text" placeholder="Описаеие моей новой задачи" />
                <button>Добавить задачу</button>
            </form>
        );
    }
}