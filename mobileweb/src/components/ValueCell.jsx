import React from 'react';
import PropTypes from 'prop-types';

class ValueCell extends React.PureComponent {
  render() {
    return (
      <div className={`value--${this.props.size}`}>
        <span className="value__label">{this.props.label}</span>
        <div className="value__value">{this.props.value}</div>
      </div>
    );
  }
}

ValueCell.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

ValueCell.defaultProps = {
  size: "medium",
};

export default ValueCell;
