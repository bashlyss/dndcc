import React from 'react';

import Combat from '../layoutComponents/Combat';
// TODO implement relay integration with real data

class CombatData extends React.Component {
  data = {
    ac: 14,
    hp: 50,
    tempHp: 7,
    initiative: 14,
    savingThrows: {
      charisma: -1,
      constitution: 4,
      dexterity: 3,
      intelligence: 0,
      strength: -2,
      wisdom: 5,
    },
    spellSave: 13,
    spells: {
      1: 0,
      2: 3,
      3: 1,
      4: 0,
      5: 3,
      6: 1,
      7: 0,
      8: 3,
      9: 1,
    },
    classAttributes: {
      'Sorcery Points': 5,
    },
    movement: 30,
    effects: 'Poison (1 min), Paralyzed',
  };

  render() {
    return <Combat {...this.data} />;
  }
}

export default CombatData;
