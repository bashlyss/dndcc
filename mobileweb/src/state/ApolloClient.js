import ApolloClient from 'apollo-boost';

import clientState from './clientDefaults';
import clientResolver from './clientResolver';

const client = new ApolloClient({
  clientState: {
    defaults: clientState,
    resolvers: clientResolver,
  },
});

export default client;
