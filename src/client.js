import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj4x2ypc84o8n0175dtimcolp'
})

const client = new ApolloClient({
  networkInterface
})

export default client