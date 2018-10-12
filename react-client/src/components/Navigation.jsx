import React, { Component } from "react";
import { calculateMembers } from "../helpers";


import { Link } from 'react-router-dom';


class Navigation extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark p-2">
                    <a href="#" className="text-white  ml-3">
                        <span className="text-white">Tasks</span>
                        <span className="badge badge-pill badge-light ml-3 p-2">
                        {this.props.numberOfTasks}
                        </span>
                    </a>
                    <div className="d-flex">
                        <Link className="p-3" to="/">Home</Link>
                        <Link className="p-3" to="/HowTo">how was this app made?</Link>
                    </div>

                </nav>
            </div>

        )
    }

}

export default Navigation;
