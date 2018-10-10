import React from "react";
import { Component } from 'react';
import Header from './Header';


class NotFound extends Component {
    componentDidMount() {
        document.title = '404 - Sorry, page error'
    }
    render() {
        return (
            <div className="container-fluid w-75">
                <Header tagline="404 - Sorry, page not found" />
                <div className="alert alert-danger">
                    <p><strong>Please navigate to another page</strong></p>
                </div>
                <button type="button" class="btn btn-info">what to do</button>
            </div>
        )
    }
}

export default NotFound;