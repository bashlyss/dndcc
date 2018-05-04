import ApolloClient from 'apollo-boost';

import clientState from './clientDefaults';
import clientResolver from './clientResolver';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  clientState: {
    defaults: clientState,
    resolvers: clientResolver,
  },
});

export default client;
