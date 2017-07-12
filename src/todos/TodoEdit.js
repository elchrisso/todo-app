import React, { Component } from 'react'
import { Button, Row, Col, Input, Label } from 'reactstrap'
import { graphql } from 'react-apollo'

import { editTodo, fetchAllTodos, fetchTodoById } from '../graphql/todos.graph'

class TodoEdit extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        id: this.props.data.Todo.id,
        ...this.state
      },
      refetchQueries: [{
        query: fetchAllTodos
      }]
    }).then(() => {
      alert('todo edited!')
    }).catch((err) => {
      alert(err)
    })
  }

  renderEditTodoForm (todo) {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Input type="text" placeholder="edit title"/>
            </Col>
            <Col>
              <Input type="dateTime"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label for="editDescription">Edit Description</Label>
              <Input type="textarea" placeholder="edit description" id="editDescription"/>
            </Col>
          </Row>
          <Row>
            <Button>Submit</Button>
          </Row>
        </form>
      </div>
    )
  }

  render () {
    if (this.props.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.data.hasOwnProperty('Todo') && this.props.data.Todo === null) {
  return <h1>Todo not found</h1>
    }

    if (this.props.hasOwnProperty('Route')) {
      return this.renderEditTodoForm(this.props.Todo)
    }

    return <h5>you have no Todo!!!</h5>
  }
}

const withTodo = graphql(fetchTodoById, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(TodoEdit)

export default graphql(editTodo)(withTodo)