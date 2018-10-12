import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import ToDoList from './ToDoList';
import ToDoListLocal from './ToDoListLocal';
import { getRandomTagLine } from '../helpers';


class App extends React.Component {


    constructor() {
        super();
        this.state={
            tasksCount: 0
        }
    }


    callback = (numberOfTasks) => {
        let tasksCount = numberOfTasks;
        this.setState({
            tasksCount:tasksCount
        })
    }

    render() {
        return (
            <div>

                <Navigation numberOfTasks={this.state.tasksCount}/>
                <Header tagline={getRandomTagLine()} />
                <ToDoListLocal callbackFromParent={this.callback} />
            </div>
        )
    }
}

export default App;