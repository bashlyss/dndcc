import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { routes, routeComponents } from './routes';

const RouterContainer = () => (
  <Query
    query={gql`
      {
        currentRoute @client
        routeArgs @client
      }
    `}
  >
    {({ loading, error, data }) => {
      console.log('rerender')
      if (loading) return null;
      if (error) return <p>Router Error: { error }</p>;
      return <Router {...data} />;
    }}
  </Query>
);

class Router extends React.Component {
  state = {
    component: null,
    page: '',
  }
  fetchComponent = () => {
    routeComponents[this.state.page]().then(Component => {
      this.setState({
        Component: Component.default,
      });
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.page !== nextProps.currentRoute) {
      return { page: nextProps.currentRoute };
    }
    return null;
  }
  componentDidMount() {
    // Being run infinitely. Why???
    // this.fetchComponent();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      // this.fetchComponent();
    }
  }
  render() {
    return this.state.Component ? <this.state.Component routeArguments={this.props.routeArgs} /> : null;
  }
}

export default RouterContainer;
