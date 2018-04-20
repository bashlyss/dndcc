import React from 'react';

import Inventory from '../layoutComponents/Inventory';
// TODO implement relay integration with real data

class InventoryData extends React.Component {
  data = {
    items: [
      { name: 'Short Sword', type: 'Weapon', description: '1d6 slashing damage. light' },
      { name: 'Dagger', type: 'Weapon', description: '1d4 slashing damage. light' },
      { name: 'Dagger', type: 'Weapon', description: '1d4 slashing damage. light' },
      { name: 'Leather Armor', type: 'Armor', description: 'AC: 12 + dex modifier' },
      { name: 'Plain clothes', type: 'Generic', description: 'Simple peasant garments' },
      { name: 'Rations', type: 'Generic', description: '1 day of food' },
      { name: 'Bed roll', type: 'Generic', description: 'Something to sleep in on the go' },
      { name: 'Torch', type: 'Generic', description: 'Something that can be lit to provide light' },
      { name: 'Torch', type: 'Generic', description: 'Something that can be lit to provide light' },
      { name: 'Torch', type: 'Generic', description: 'Something that can be lit to provide light' },
      { name: 'Potion of Healing', type: 'Interactive', description: '2d4 + 2 healing' },
      { name: 'Potion of Healing', type: 'Interactive', description: '2d4 + 2 healing' },
      {
        name: 'Wand of Secrets',
        type: 'Interactive',
        description: '4 charges, regains 1d4 daily, can find traps within 30 feet',
      },
    ],
  };

  render() {
    return <Inventory {...this.data} />;
  }
}

export default InventoryData;
