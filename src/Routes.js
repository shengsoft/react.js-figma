import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from './pages/Dashboard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} /> 
                <Route exact path='/signin' component={SignIn} /> 
                <Route exact path='/signup' component={SignUp} /> 
                <Route exact path='/dashboard' component={Dashboard} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;