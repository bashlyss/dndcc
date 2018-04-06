import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ValueCell from '../components/ValueCell';

class SpellSlots extends React.Component {
  render() {
    return (
      <div className={this.props.row ? 'row row--centered wrap' : ''}>
        <span>Spell Slots Remaining</span>
        {
          _.map(this.props.slots, (slots, level) =>
            <ValueCell key={level} label={`Level ${level}`} value={slots} />)
        }
      </div>
    );
  }
}

SpellSlots.propTypes = {
  slots: PropTypes.objectOf(PropTypes.number).isRequired,
  row: PropTypes.bool,
};

SpellSlots.defaultProps = {
  row: false,
};

export default SpellSlots;
