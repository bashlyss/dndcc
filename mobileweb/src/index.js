import ReactDOM from 'react-dom';
import React from 'react';

import styles from './index.css';
import Root from './layoutComponents/Root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('app'));
});
