// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/data',  // GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
