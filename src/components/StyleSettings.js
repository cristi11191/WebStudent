import React from 'react';
import '../styles/styles.css';
import { UilPalette, UilMoon, UilSun } from '@iconscout/react-unicons';
import useDarkMode from '../hooks/useDarkMode';

const StyleSettings = ({ onColorChange }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="style-settings">
      <h3>Style Settings</h3>
      <div className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <UilSun /> : <UilMoon />}
        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
      <div className="color-picker">
        <UilPalette />
        <input type="color" onChange={(e) => onColorChange(e.target.value)} />
      </div>
    </div>
  );
};

export default StyleSettings;
