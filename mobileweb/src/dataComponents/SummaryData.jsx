import React from 'react';

import Summary from '../layoutComponents/Summary';
// TODO implement relay integration with real data

class SummaryData extends React.Component {
  data = {
    ac: 14,
    availableHitDice: '3d8',
    hp: 50,
    initiative: 4,
    passivePerception: 12,
    savingThrows: {
      charisma: -1,
      constitution: 4,
      dexterity: 3,
      intelligence: 0,
      strength: -2,
      wisdom: 5,
    },
    spellSave: 13,
  };

  render() {
    return <Summary {...data} />;
  }
}

export default SummaryData;
