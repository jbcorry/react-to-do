import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
