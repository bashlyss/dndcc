import React from 'react';
import PropTypes from 'prop-types';

import routes from '../utils/routes';
import buttonify from '../components/Button/buttonify';
import ValueCell from '../components/ValueCell';
import List from '../components/List/List';

class SavingThrows extends React.Component {
  navigateToStrength = () => routes.navigateToAbilities('strength');
  navigateToDexterity = () => routes.navigateToAbilities('dexterity');
  navigateToIntelligence = () => routes.navigateToAbilities('intelligence');
  navigateToWisdom = () => routes.navigateToAbilities('wisdom');
  navigateToCharisma = () => routes.navigateToAbilities('charisma');
  render() {
    const ButtonValueCell = buttonify(ValueCell);
    return (
      <List direction="vertical">
        <ButtonValueCell label="STR" value={this.props.strength} onClick={this.navigateToStrength} />
        <ButtonValueCell label="DEX" value={this.props.dexterity} onClick={this.navigateToDexterity} />
        <ValueCell label="CON" value={this.props.constitution} />
        <ButtonValueCell label="INT" value={this.props.intelligence} onClick={this.navigateToIntelligence} />
        <ButtonValueCell label="WIS" value={this.props.wisdom} onClick={this.navigateToWisdom} />
        <ButtonValueCell label="CHA" value={this.props.charisma} onClick={this.navigateToCharisma} />
      </List>
    );
  }
}

SavingThrows.propTypes = {
  charisma: PropTypes.number.isRequired,
  constitution: PropTypes.number.isRequired,
  dexterity: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  wisdom: PropTypes.number.isRequired,
};

export default SavingThrows;
