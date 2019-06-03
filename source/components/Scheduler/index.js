// Core
import React, { Component } from 'react';

//Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';

// Instruments
import Styles from './styles.m.css';
import { api } from '../../REST';

 // ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')


export default class Scheduler extends Component {
    render () {
        return (
            <section className ={ Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input type='search' placeholder='Поиск'/>
                    </header>
                    <section className={ Styles }>
                        <form>
                            <input maxLength='50' type='text' placeholder='Описаеие моей новой задачи' />
                            <button>Добавить задачу</button>
                        </form>
                        <div>
                            <ul>
                                <div>
                                    <Task/>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <footer>
                        <div>
                            <Checkbox/>
                        </div>
                        <span className={ Styles.completeAllTasks }>Все задачи выполнены</span>
                    </footer>
                </main>
            </section>
        );
    }
}
