import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/data' }), // Use the correct endpoint
    cache: new InMemoryCache(),
});

export default client;
