import React from 'react';
import PropTypes from 'prop-types';

import List from '../components/List/List';
import ListItem from '../components/List/ListItem';
import ListSubheader from '../components/List/ListSubheader';

class PlayerDetails extends React.Component {
  render() {
    return (
      <div className='list-view'>
        <div className="list-title typography--medium">Player Summary</div>
        <List direction="vertical">
          <ListSubheader>Basic Details</ListSubheader>
          <ListItem>Name: {this.props.name}</ListItem>
          <ListItem>Level: {this.props.level}</ListItem>
          <ListItem>Experience: {this.props.experience}</ListItem>
          <ListSubheader>Class Information</ListSubheader>
          <ListItem>Class: {this.props.class}</ListItem>
          <ListItem>Race: {this.props.race}</ListItem>
          <ListItem>Background: {this.props.background}</ListItem>
          <ListItem>Alignment: {this.props.alignment}</ListItem>
          <ListSubheader>Quick Access</ListSubheader>
          <ListItem>Movement Speed: {this.props.speed}</ListItem>
          <ListItem>Vision: {this.props.vision}</ListItem>
          <ListItem>Size: {this.props.size}</ListItem>
          <ListSubheader>Physical Description</ListSubheader>
          <ListItem>Gender: {this.props.gender}</ListItem>
          <ListItem>Height: {this.props.height}</ListItem>
          <ListItem>Weight: {this.props.weight}</ListItem>
          <ListItem>Eye Colour: {this.props.eyes}</ListItem>
          <ListItem>Hair Colour: {this.props.hair}</ListItem>
          {this.props.physicalDescription && (
            <ListItem>More detailed description: {this.props.physicalDescription}</ListItem>
          )}
          <ListSubheader>Personality</ListSubheader>
          <ListItem>Bond: {this.props.bond}</ListItem>
          <ListItem>Flaw: {this.props.flaw}</ListItem>
          <ListItem>Strength: {this.props.strength}</ListItem>
          <ListItem>Brief Backstory: {this.props.backstory}</ListItem>
        </List>
      </div>
    );
  }
}

PlayerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  class: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  height: PropTypes.string,
  weight: PropTypes.string,
  background: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  vision: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  eyes: PropTypes.string,
  hair: PropTypes.string,
  gender: PropTypes.string,
  physicalDescription: PropTypes.string,
  bond: PropTypes.string,
  flaw: PropTypes.string,
  strength: PropTypes.string,
  backstory: PropTypes.string,
};

PlayerDetails.defaultProps = {
  height: '—',
  weight: '—',
  eyes: '—',
  hair: '—',
  gender: '—',
  bond: '—',
  flaw: '—',
  strength: '—',
  backstory: '—',
};

export default PlayerDetails;
