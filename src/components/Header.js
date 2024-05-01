import React from 'react';

const Header = ({ darkMode, onDarkModeClick }) => {
  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={onDarkModeClick}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
