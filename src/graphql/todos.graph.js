import { gql } from 'react-apollo'

export const fetchAllTodos = gql`
  {
    allTodoes {
      id
      title
    }
  }
`