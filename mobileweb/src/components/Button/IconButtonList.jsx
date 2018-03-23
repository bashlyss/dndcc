import React from 'react';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

class IconButtonList extends React.PureComponent {
  render() {
    return (
      <div className={`icon-button__list icon-button__list--${this.props.direction}`}>
        {this.props.children}
      </div>
    );
  }
}

IconButtonList.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

IconButtonList.defaultProps = {
  direction: 'horizontal',
};

export default IconButtonList;
