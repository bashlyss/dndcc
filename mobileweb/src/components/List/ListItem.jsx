import PropTypes from 'prop-types';
import React from 'react';

class ListItem extends React.PureComponent {
  render() {
    const typographyClassName = this.props.subitem ? 'typography--extra-small' : 'typography-small';
    return (
      <div className={`list__item ${typographyClassName}`}>
        {this.props.children}
      </div>
    );
  }
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  subitem: PropTypes.bool,
};

ListItem.defaultProps = {
  subitem: false,
};

export default ListItem;
