import React from 'react';
import _ from 'lodash';

import InventoryItem from './InventoryItem';

import List from '../components/List/List';
import ListSubheader from '../components/List/ListSubheader';

class Inventory extends React.PureComponent {
  state = { groupedItems: {} };
  static getDerivedStateFromProps(nextProps, prevState) {
    const groupedItems = _.groupBy(nextProps.items, 'type');
    if (_.isEqual(groupedItems, prevState.groupedItems)) {
      return null;
    }
    return { groupedItems };
  }
  render() {
    return (
      <div className="list-view">
        <div className="list-title typography--medium">Inventory</div>
        <List direction="vertical">
          {_.map(this.state.groupedItems, (itemList, type) => (
            <React.Fragment key={type}>
              <ListSubheader>{type}</ListSubheader>
              {_.map(_.groupBy(itemList, 'name'), (items, name) => (
                <InventoryItem
                  name={name}
                  count={items.length}
                  description={items[0].description}
                  key={name}
                />
              ))}
            </React.Fragment>
          ))}
        </List>
      </div>
    )
  }
}

export default Inventory;
