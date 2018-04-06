import React from 'react';
import PropTypes from 'prop-types';

import ValueCell from '../components/ValueCell';
import Button from '../components/Button/Button';
import routes from '../utils/routes';

import Root from './Root';
import SavingThrows from './SavingThrows';

class Summary extends React.PureComponent {
  render() {
    return (
      <Root activeTab="summary">
        <div className="summary-view">
          <div className="summary--main">
            <div className="row">
              <ValueCell label="Max HP" value={this.props.hp} size="large" />
            </div>
            <div className="row">
              <ValueCell label="AC" value={this.props.ac} />
              {this.props.spellSave && <ValueCell label="Spell DC" value={this.props.spellSave} />}
            </div>
            <div className="row">
              <ValueCell label="Passive Perception" value={this.props.passivePerception} />
              <ValueCell label="Initiative" value={this.props.initiative} />
            </div>
            <div className="row">
              <ValueCell label="Hit Die" value={this.props.availableHitDice} />
              <Button onClick={routes.navigateToShortRest}>Short Rest</Button>
              <Button onClick={routes.navigateToLongRest}>Long Rest</Button>
            </div>
          </div>
          <SavingThrows {...this.props.savingThrows} />
        </div>
      </Root>
    );
  }
}

Summary.propTypes = {
  ac: PropTypes.number.isRequired,
  availableHitDice: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  initiative: PropTypes.number.isRequired,
  passivePerception: PropTypes.number.isRequired,
  savingThrows: PropTypes.shape(SavingThrows.propTypes).isRequired,
  spellSave: PropTypes.number,
};

Summary.defaultProps = {
  spellSave: null,
};

export default Summary;
