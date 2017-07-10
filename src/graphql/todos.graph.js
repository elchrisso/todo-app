import { gql } from 'react-apollo'

export const fetchAllTodos = gql`
  {
    allTodoes {
      id
      title
      description
    }
  }
`

export const addTodo = gql`
  mutation ($title: String!, $description: String) {
    createTodo(title: $title, description: $description) {
      id
      title
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