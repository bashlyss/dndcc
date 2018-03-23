import ReactDOM from 'react-dom';
import React from 'react';

import SummaryData from './dataComponents/SummaryData';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<SummaryData />, document.getElementById('main'));
});
