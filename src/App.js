import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import TodoHeader from './TodoHeader'
import TodoList from './todos/TodoList'
import JunkDrawer from './JunkDrawer'

class App extends Component {
  render() {
    return (
      <div>
        <TodoHeader/>
        <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route exact path="/junkdrawer" component={JunkDrawer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
