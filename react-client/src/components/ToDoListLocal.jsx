import React, { Component } from 'react';
import { todos } from '../todos.json';
import Form from './Form';


class ToDoLocalList extends Component {
    constructor() {
        super();
        this.state = {
            todos
        }

        this.getValue = (value) => {
            this.props.callbackFromParent(value);
        }

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    componentWillMount(){

        this.getValue(this.state.todos.length);
    }


    removeTodo(index) {
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        });
        this.getValue(this.state.todos.length-1);
    }


    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
        this.getValue(this.state.todos.length+1);
    }



    render() {

        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-6" key={i}>
                    <div className="card mt-3 p-3">
                        <div className="card-title text-center">
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            {todo.description}
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-danger"
                                onClick={this.removeTodo.bind(this, i)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        });

        // RETURN THE COMPONENT
        return (
            <div>
                <div className="container">
                    <div className="row mt-4">

                        <div className="col-md-4 text-center">
                            <Form onAddTodo={this.handleAddTodo}></Form>
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                {todos}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ToDoLocalList;


















