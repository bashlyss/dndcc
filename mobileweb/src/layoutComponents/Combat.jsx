import React from 'react';

import SavingThrows from './SavingThrows';
import SpellSlots from './SpellSlots';
import ClassAttributes from './ClassAttributes';

import ValueCell from '../components/ValueCell';
import Button from '../components/Button/Button';

class Combat extends React.PureComponent {
  takeDamage() {} // TODO implement these click handlers - popup
  tempHP() {}
  attack() {}
  useSpell() {}
  render() {
    return (
      <div className="summary-view">
        <div className="summary--main">
          <div className="row">
            <ValueCell label="Current HP" value={this.props.hp} size="large" />
            <ValueCell label="Temp HP" value={this.props.tempHp} size="large" />
          </div>
          <div className="row">
            <ValueCell label="AC" value={this.props.ac} />
            {this.props.spellSave && <ValueCell label="Spell DC" value={this.props.spellSave} />}
            <ValueCell label="Initiative" value={this.props.initiative} />
          </div>
          <SpellSlots slots={this.props.spells} row />
          <ClassAttributes attributes={this.props.classAttributes} />
          <div className="row">
            <ValueCell label="Movement" value={this.props.movement} />
            <ValueCell label="Ongoing Effects" value={this.props.effects} />
          </div>
          <div className="row button-row">
            <Button onClick={this.takeDamage}>Record Damage</Button>
            <Button onClick={this.tempHP}>Add Temporary HP</Button>
            <Button onClick={this.attack}>Attack!</Button>
            <Button onClick={this.useSpell}>Use Spell</Button>
          </div>
        </div>
        <SavingThrows {...this.props.savingThrows} />
      </div>
    );
  }
}

export default Combat;
