import React, { Component } from 'react'

import { Row, Col, Button, Input, Label } from 'reactstrap'
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
        description: this.state.description,
        todoDueDate: this.state.todoDueDate
      }
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <Row>
            <Col>
              <Label/>
              <Input type="text" placeholder="title" id="todoTitle" onChange={(evt) => this.setState({ title: evt.target.value})}/>
            </Col>
            <Col>
              <Label/>
              <Input type="date" id="todoDueDate" onChange={(evt) => this.setState({ todoDueDate: evt.target.value})}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label for="todoDescription">Description</Label>
              <Input type="textarea" placeholder="description" id="todoDescription" onChange={(evt) => this.setState({ description: evt.target.value})}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit" color="success">Add Todo</Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

export default graphql(addTodo)(TodoAdd)