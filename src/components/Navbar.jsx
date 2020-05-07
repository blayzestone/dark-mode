import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { api_ids } from '../constants';
import Dropdown from './Dropdown';

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div
        style={{ display: "flex", alignItems: "center" }}
      >
      <Dropdown darkMode={darkMode} ids={api_ids} getCoinDetails={props.getCoinDetails}/>
      <div 
        className="dark-mode__toggle"
        style={{ marginLeft: "2rem" }}
      >
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
