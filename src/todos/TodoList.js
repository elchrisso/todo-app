import React, { Component } from 'react'
import { Card, CardText, CardTitle, CardSubtitle, Button, CardImg, CardBlock, Row, Col } from 'reactstrap'
import '../App.css'
import { Link } from 'react-router-dom'
import { graphql, } from 'react-apollo'
import { fetchAllTodos, removeTodo } from '../graphql/todos.graph'


class TodoList extends Component {

  handleRemoveTodo (todo) {
    this.props.mutate ({
      refetchQueries: [{
        query: fetchAllTodos
      }],
      variables: {
        id: todo.id
      }
    })
  }

  render () {
    let todos = null
    if (this.props.data.allTodoes) {
      todos = this.props.data.allTodoes.map((todo) => {
        return (
          <Card className="TodoCard">
            <CardImg top width="25%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBlock>
              <CardTitle>{todo.title}</CardTitle>
              <CardSubtitle>due {todo.dueDate}</CardSubtitle>
              <CardText>{todo.description}</CardText>
              <Button color="primary">
                <Link to={`/edittodo/${todo.id}`}>Edit</Link>
              </Button>
              <Button color="danger" onClick={() => this.handleRemoveTodo(todo)}>Delete</Button>
            </CardBlock>
          </Card>
        )
      })
    }
    return (
      <div>
        <Row>
          <Col>
            <h4>todo</h4>
            {todos}
            </Col>
          <Col>
            <h4>doing</h4>
          </Col>
          <Col>
            <h4>done</h4>
          </Col>
        </Row>
      </div>
    )
  }
}

const withTodoQuery = graphql(fetchAllTodos, {options:
  { fetchPolicy: 'network-only' }})(TodoList)
const withTodoMutation = graphql(removeTodo)(withTodoQuery)

export default withTodoMutation