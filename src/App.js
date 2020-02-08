import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {addTask, deleteTask} from './actions'

import Nav from './Nav';
import TaskList from './TaskList'
// import AddTask from './AddTask'

// const dispatch = useDispatch();

const AddTask = () => {
    const addTask = (e) => {
        e.preventDefault();
        // dispatch(addTask({name: e.target.name, dueBy: e.target.dueBy}));
    }

    return(
        <form onSubmit={() => useDispatch(addTask())}>
            <input type="text" name="name"/>
            <input type="text" name="dueBy"/>
            <button>Submit</button>
        </form>
    )
}

function App(){
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.taskList);
  const task = {
    taskName: '',
    dueBy: ''
  };

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
    <AddTask/>
  </div>
);

export default App