import React from 'react';
import PropTypes from 'prop-types';

import AbilityList from '../layoutComponents/AbilityList';

class AbilityData extends React.Component {
  data = {
    strength: {
      athletics: 1,
    },
    dexterity: {
      acrobatics: 2,
      sleight_of_hand: -1,
      stealth: 1,
    },
    intelligence: {
      arcana: 0,
      history: 1,
      investigation: -1,
      nature: 7,
      religion: 3.
    },
    wisdom: {
      animal_handling: 2,
      insight: 1,
      medicine: 0,
      perception: -4,
      survival: 3,
    },
    charisma: {
      deception: 2,
      intimidation: 1,
      performance: 3,
      persuasion: 8,
    },
  };

  render() {
    return (
      <AbilityList
        abilities={this.data[this.props.routeArguments[0]]}
        attribute={this.props.routeArguments[0]}
      />
    );
  }
}

AbilityData.propTypes = {
  routeArguments: PropTypes.arrayOf(PropTypes.oneOf([
    'strength', 'dexterity', 'intelligence', 'wisdom', 'charisma',
  ])).isRequired,
};

export default AbilityData;
