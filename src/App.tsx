import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
