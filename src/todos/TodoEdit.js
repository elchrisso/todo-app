import React, { Component } from 'react'
import { Button, Row, Col, Input, Label, Form, FormGroup } from 'reactstrap'
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
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <FormGroup>
              <Input type="text" id="todoTitle" defaultValue={todo.title} onChange={(evt) => this.setState({ title: evt.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Input type="dateTime" id="dueDate" defaultValue={todo.todoDueDate} onChange={(evt) => this.setState({ todoDueDate: evt.target.value})}/>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Input type="textarea" defaultValue={todo.description} id="editDescription" onChange={(evt) => this.setState({ description: evt.target.value })}/>
            </FormGroup>
          </Row>
          <Row>
            <Button type="submit" color="success" size="small">
              Apply Changes
            </Button>
          </Row>
        </Form>
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

    if (this.props.data.hasOwnProperty('Todo')) {
      return this.renderEditTodoForm(this.props.data.Todo)
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