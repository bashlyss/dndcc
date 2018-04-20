import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../components/List/ListItem';

class InventoryItem extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <ListItem>{this.props.name} ({this.props.count})</ListItem>
        <ListItem subitem>{this.props.description}</ListItem>
      </React.Fragment>
    );
  }
}

InventoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default InventoryItem;
