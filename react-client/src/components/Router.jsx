import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from 'react';


import App from './App';
import Help from './Help';
import NotFound from './NotFound';



class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {App} />
                    <Route path = "/help" component = {Help} />
                    <Route component = {NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default Router;