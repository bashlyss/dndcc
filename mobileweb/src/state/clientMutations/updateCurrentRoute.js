import gql from 'graphql-tag';

export default (_, { newRoute, args }, { cache }) => {
  const data = {
    currentRoute: newRoute,
    routeArgs: args,
  };
  cache.writeData({ data });
  return null;
};

const UPDATE_CURRENT_ROUTE = gql`
  mutation updateCurrentRoute($newRoute: Boolean, $args: Array) {
    updateCurrentRoute(newRoute: $newRoute, args: $args) @client
  }
`;

export { UPDATE_CURRENT_ROUTE };
