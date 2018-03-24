import ReactDOM from 'react-dom';
import React from 'react';

import styles from './index.css';
import SummaryData from './dataComponents/SummaryData';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<SummaryData />, document.getElementById('app'));
});
