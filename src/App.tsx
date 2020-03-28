import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Admin from './pages/Admin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Menu />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route component={Page404} />
        </Switch>
    </Router>
  );
}
