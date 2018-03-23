import React from 'react';
import PropTypes from 'prop-types';

import routes from '../utils/routes';

import IconButtonList from '../components/Button/IconButtonList';
import IconButton from '../components/Button/IconButton';

class Menu extends React.PureComponent {
  render() {
    // TODO get SVG icons for the buttons
    return (
      <IconButtonList>
        <IconButton onClick={routes.navigateToSummary}>Summary</IconButton>
        <IconButton onClick={routes.navigateToCombat}>Combat</IconButton>
        <IconButton onClick={routes.navigateToPlayerDetails}>Player details</IconButton>
        <IconButton onClick={routes.navigateToInventory}>Inventory</IconButton>
        <IconButton onClick={routes.navigateToSettings}>Settings</IconButton>
      </IconButtonList>
    );
  }
}

export default Menu;
