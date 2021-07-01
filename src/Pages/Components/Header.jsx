import React from 'react';
import './Header.css';
import Logotipo from '../../Assets/Logo Amafresp.svg';

const Header = () => {
  return (
    <header className="Header">
      <img src={Logotipo} alt="Logotipo Amafresp" className="logo" />
    </header>
  );
};

export default Header;
