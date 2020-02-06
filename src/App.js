import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Nav';
import TaskList from './TaskList'

function App(){
  return(
    <Router> 
      <div className="app">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <TaskList/>
  </div>
);

export default App