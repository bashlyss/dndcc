import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ValueCell from '../components/ValueCell';

class ClassAttributes extends React.Component {
  render() {
    return (
      <div className="row">
        {
          _.map(this.props.attributes, (value, attribute) =>
            <ValueCell key={attribute} label={attribute} value={value} />)
        }
      </div>
    );
  }
}

ClassAttributes.propTypes = {
  attributes: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
};

export default ClassAttributes;
