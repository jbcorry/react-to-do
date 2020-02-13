import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
