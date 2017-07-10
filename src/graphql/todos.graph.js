import { gql } from 'react-apollo'

export const fetchAllTodos = gql`
  {
    allTodoes {
      id
      title
    }
  }
`

export const addTodo = gql`
  mutation ($title: String!) {
    createTodo(title: $title) {
      id
      title
    }
  }
`