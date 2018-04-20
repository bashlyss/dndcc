import PropTypes from 'prop-types';
import React from 'react';

class ListSubheader extends React.PureComponent {
  render() {
    return <div className="list__header">{this.props.children}</div>
  }
}

ListSubheader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ListSubheader;
