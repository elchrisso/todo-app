import React, { Component } from 'react'

import { Row, Col, Button } from 'reactstrap'
import { graphql } from 'react-apollo'

import { addTodo, fetchAllTodos } from '../graphql/todos.graph'

class TodoAdd extends Component {
  addTodo = (evt) => {
    evt.preventDefault()
    this.props.mutate ({
      refetchQueries: [{
        query: fetchAllTodos
      }],
      variables: {
        title: this.state.title,
        description: this.state.description
      }
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <Row>
            <Col>
              <input type="text" placeholder="title" onChange={(evt) => this.setState({ title: evt.target.value})}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="text" placeholder="description" onChange={(evt) => this.setState({ description: evt.target.value})}/>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit">Add Todo</Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

export default graphql(addTodo)(TodoAdd)