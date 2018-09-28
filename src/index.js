import './App.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import App from './App'
import client from './graphql'

const httpLink = new HttpLink({
  uri: 'https://eu1.prisma.sh/sergio-melendez-f22980/database/dev'
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
