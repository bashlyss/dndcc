import React from 'react';
import _ from 'lodash';

import List from '../components/List/List';
import ListItem from '../components/List/ListItem';

class AbilityList extends React.Component {
  render() {
    return (
      <div className="abilities-view list-view">
        <div className="list-title typography--medium">{_.capitalize(this.props.attribute)}</div>
        <List direction="vertical">
          {_.map(this.props.abilities, (score, ability) => (
            <ListItem key={ability}>
              <span className="ability-name">{_.startCase(ability)}</span>
              <span className="ability-score">{score}</span>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default AbilityList;
