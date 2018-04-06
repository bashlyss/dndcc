import ReactDOM from 'react-dom';
import React from 'react';

import styles from './index.css';
import Router from './utils/Router';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router />, document.getElementById('app'));
});
