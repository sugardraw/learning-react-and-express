import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import { getRandomTagLine } from '../helpers';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid w-75">
                <Header tagline={getRandomTagLine()} />
                <ToDoList />
            </div>
        )
    }
}

export default App;