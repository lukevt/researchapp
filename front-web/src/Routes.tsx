import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import Records from './pages/Records'
import Charts from './pages/Charts'


const Routes = () =>(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/records" component={Records}></Route>
            <Route path="/charts" component={Charts}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;