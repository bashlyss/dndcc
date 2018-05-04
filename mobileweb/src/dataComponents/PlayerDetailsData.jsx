import React from 'react';

import PlayerDetails from '../layoutComponents/PlayerDetails';

class PlayerDetailsData extends React.PureComponent {
  data = {
    name: 'Character Name',
    level: 3,
    experience: 5000,
    class: 'Ranger',
    race: 'Wood Elf',
    height: '5\'0"',
    weight: '150 lbs',
    background: 'Outlander',
    alignment: 'Neutral Good',
    speed: 30,
    vision: 'Darkvision - 120\'',
    size: 'Medium',
    physicalDescription: 'An average height elf with exceptionally large ears and no nose thanks to an accident when he was young',
  }

  render() {
    return <PlayerDetails {...this.data} />;
  }
}

export default PlayerDetailsData;
