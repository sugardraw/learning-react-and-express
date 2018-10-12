import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from 'react';


import App from './App';
import HowTo from './HowTo';
import NotFound from './NotFound';




class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {App} />
                    <Route exact path = "/HowTo" component = {HowTo} />
                    <Route component = {NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default Router;