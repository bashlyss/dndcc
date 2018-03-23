import React from 'react';
import PropTypes from 'prop-types';

class IconButton extends React.PureComponent {
  render() {
    return (
      <button className="icon-button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default IconButton;
