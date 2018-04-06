import React from 'react';
import PropTypes from 'prop-types';

import routes from '../utils/routes';

import List from '../components/List/List';
import IconButton from '../components/Button/IconButton';
import House from '../components/SVGs/House';
import Swords from '../components/SVGs/Swords';
import Knapsack from '../components/SVGs/Knapsack';
import Person from '../components/SVGs/Person';
import Gear from '../components/SVGs/Gear';

class Menu extends React.PureComponent {
  navSummary = () => routes.navigateToSummary();
  navCombat = () => routes.navigateToCombat();
  navDetails = () => routes.navigateToPlayerDetails();
  navInventory = () => routes.navigateToInventory();
  navSettings = () => routes.navigateToSettings();
  render() {
    // TODO get SVG icons for the buttons
    return (
      <List>
        <IconButton onClick={this.navSummary}><House /></IconButton>
        <IconButton onClick={this.navCombat}><Swords /></IconButton>
        <IconButton onClick={this.navDetails}><Person /></IconButton>
        <IconButton onClick={this.navInventory}><Knapsack /></IconButton>
        <IconButton onClick={this.navSettings}><Gear /></IconButton>
      </List>
    );
  }
}

export default Menu;
