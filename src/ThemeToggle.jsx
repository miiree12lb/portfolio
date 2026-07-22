import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './css/ThemeToggle.css';

const ThemeToggle = ({theme, toggleTheme}) => {
  return (
    <label className="theme-switch" htmlFor="theme-toggle">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div className="slider">
        <Moon className="icon moon-icon" size={16} />
        <Sun className="icon sun-icon" size={16} />
        <div className="thumb"></div>
      </div>
    </label>
  );
};

export default ThemeToggle;