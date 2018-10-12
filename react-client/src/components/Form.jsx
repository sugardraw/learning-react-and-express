import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('sending data')
        this.props.onAddTodo(this.state);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }



    render() {
        return (
            <div className="text-center">
                <div className="card p-3 m-3">
                    <h4 className="p-3">Add a new Task</h4>
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="title"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                onChange={this.handleInput}
                                name="responsible"
                                className="form-control"
                                placeholder="Responsible" />

                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                onChange={this.handleInput}
                                name="description"
                                className="form-control"
                                placeholder="Description" />

                        </div>
                        <div className="form-group">
                            <select
                                name="priority"
                                className="form-control"
                                value={this.state.priority}
                                onChange={this.handleInput}>

                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>

                    </form>
                </div>
            </div>

        )

    }
}

export default Form;






