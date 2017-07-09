import React, { Component } from 'react'
import { Card, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { graphql, } from 'react-apollo'
import { fetchAllTodos } from '../graphql/todos.graph'


class TodoList extends Component {
  render () {

    let todos = null
    if (this.props.data.allTodoes) {
      todos = this.props.data.allTodoes.map((todo) => {
        return (
          <p>{todo.title}</p>
        )
      })
    }
    return (
      <p>{todos}</p>
      //change this to a reactstrap card
    )
  }
}

const withTodoQuery = graphql(fetchAllTodos, {options:
  { fetchPolicy: 'network-only' }})(TodoList)

export default withTodoQuery