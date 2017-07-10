import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import TodoHeader from './TodoHeader'
import TodoList from './todos/TodoList'
import JunkDrawer from './JunkDrawer'
import TodoAdd from './todos/TodoAdd'

class App extends Component {
  render() {
    return (
      <div>
        <TodoHeader/>
        <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route exact path="/junkdrawer" component={JunkDrawer}/>
          <Route exact path="/addtodo" component={TodoAdd}/>
        </Switch>
      </div>
    );
  }
}

export default App;
