import React from 'react';
import PropTypes from 'prop-types';

import { routes, routeComponents } from './routes';

class Router extends React.Component {
  state = {
    page: 'summary',
  };
  updateCurrentState = (event) => {
    this.setState(event.state);
    routeComponents[event.state.page]().then(Component => this.setState({
      Component: Component.default,
    }));
  }
  componentDidMount() {
    window.onpopstate = this.updateCurrentState;
    routeComponents[this.state.page]().then(Component => this.setState({
      Component: Component.default,
    }));
  }
  render() {
    return this.state.Component ? <this.state.Component /> : null;
  }
}

export default Router;
