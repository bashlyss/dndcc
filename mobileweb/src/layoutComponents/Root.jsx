import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';

import Menu from './Menu';

import client from '../state/ApolloClient';
import Router from '../utils/Router';

class Root extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <div className="main__body">
            <Router key="router" />
          </div>
          <Menu />
        </div>
      </ApolloProvider>
    );
  }
}

export default Root;
