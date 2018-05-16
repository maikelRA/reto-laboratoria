import React from "react";

import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import UserWall from './components/UserWall';
import Signup from './components/Signup';
import Login from './components/Login';

const AppRoutes = () =>
  <div className="App-main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/user-wall" component={UserWall}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
    </Switch>
  </div>

export default AppRoutes;
