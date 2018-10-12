import React, { Component } from "react";


class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            images: []

        };


    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                let task = data.map((item, i) => {
                    if (i < 6) {
                        return (
                            <div className="w-25">

                                <div className="card p-3 m-3">
                                    <div className="card-header mb-3">
                                        <h3 className="p-2">{item.title}</h3>
                                    </div>
                                    <span className="badge badge-pill badge-danger m-auto p-3 ml-2">
                                        {item.id}
                                    </span>

                                    <div className="card-body">
                                        <p>{item.userId}</p>
                                        <p><mark>{item.title}</mark></p>
                                    </div>
                                    <img src="" alt="responsive-image" className="img-fluid" />
                                </div>
                            </div>

                        )
                    }
                }
                )
                this.setState({ tasks: task })
            })


    }

    render() {
        return (
            <div className="row p-4 m-4">
                {this.state.tasks}
            </div>
        )
    }
}
export default ToDoList;


















