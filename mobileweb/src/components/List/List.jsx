import React from 'react';
import PropTypes from 'prop-types';

class List extends React.PureComponent {
  render() {
    return (
      <div className={`list list--${this.props.direction}`}>
        {this.props.children}
      </div>
    );
  }
}

List.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

List.defaultProps = {
  direction: 'horizontal',
};

export default List;
