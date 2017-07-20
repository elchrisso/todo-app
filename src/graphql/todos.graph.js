import { gql } from 'react-apollo'

export const fetchAllTodos = gql`
  {
    allTodoes {
      id
      title
      description
      dueDate
    }
  }
`

export const addTodo = gql`
  mutation ($title: String!, $description: String, $todoDueDate: DateTime) {
    createTodo(title: $title, description: $description, dueDate: $todoDueDate) {
      id
      title
    }
  }
`

export const fetchTodoById = gql`
  query ($id: ID!) {
    Todo(id: $id) {
      id
      title
      description
      dueDate
    }
  }
`

export const editTodo = gql`
  mutation ($id: ID!, $title: String, $description: String, $dueDate: DateTime) {
    updateTodo(id: $id, title: $title, description: $description, dueDate: $dueDate) {
      id
    }
  }
`

export const removeTodo = gql`
  mutation ($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`