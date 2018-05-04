import React from 'react';

class SettingsView extends React.PureComponent {
  render() {
    return (
      <div>
        <div>Settings</div>
        <ul>
          <li>Password</li>
          <li>Character Switch</li>
          <li>Save characters offline (per character)</li>
          <li>Register</li>
          <li>Create new character</li>
        </ul>
      </div>
    );
  }
}

export default SettingsView;
