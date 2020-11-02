import React from 'react';
import logo from '../images/usa-logo-white.svg';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Around the US logo" />
    </header>
  );
}

export default Header;