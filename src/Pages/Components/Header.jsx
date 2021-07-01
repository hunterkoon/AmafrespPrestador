import React from 'react';
import Style from './Header.css';
import Logotipo from '../../Assets/Logo Amafresp.svg';

const Header = () => {
  return (
    <header className="Header">
      <img className={Style.Image} src={Logotipo} alt="Logotipo Amafresp" />
    </header>
  );
};

export default Header;
