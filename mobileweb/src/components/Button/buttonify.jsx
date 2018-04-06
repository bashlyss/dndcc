import React from 'react';
import PropTypes from 'prop-types';

function buttonify(Component) {
  class ButtonifyHOC extends React.PureComponent {
    render() {
      return (
        <button className="buttonify" onClick={this.props.onClick}>
          <Component {..._.omit(this.props, ['onClick'])} />
        </button>
      );
    };
  }

  ButtonifyHOC.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  return ButtonifyHOC;
}

export default buttonify;
