import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';

class Root extends React.PureComponent {
  render() {
    return (
      <div className="main">
        {this.props.children}
        <Menu activeTab={this.props.activeTab} />
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.element.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Root;
