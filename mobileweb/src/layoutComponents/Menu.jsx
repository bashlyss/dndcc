import React from 'react';
import PropTypes from 'prop-types';

import routes from '../utils/routes';

import List from '../components/List/List';
import IconButton from '../components/Button/IconButton';

class Menu extends React.PureComponent {
  render() {
    // TODO get SVG icons for the buttons
    return (
      <List>
        <IconButton onClick={routes.navigateToSummary}>Summary</IconButton>
        <IconButton onClick={routes.navigateToCombat}>Combat</IconButton>
        <IconButton onClick={routes.navigateToPlayerDetails}>Player details</IconButton>
        <IconButton onClick={routes.navigateToInventory}>Inventory</IconButton>
        <IconButton onClick={routes.navigateToSettings}>Settings</IconButton>
      </List>
    );
  }
}

export default Menu;
