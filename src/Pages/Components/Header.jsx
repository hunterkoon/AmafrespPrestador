import React from 'react';
import './Header.css';
import Logotipo from '../../Assets/Logo Amafresp.svg';
import Hamburguinho from '../../Assets/Hamburguinho.svg';
import { Link } from 'react-router-dom';

const Header = ({ ...props }) => {
  const hidden = props.user ? 'inline-flex' : 'none';
  return (
    <header className="Header">
      <div className="div-img-logotipo">
        <img src={Logotipo} alt="Logotipo Amafresp" />
      </div>

      <div style={{ display: hidden }} className="main-div-user">
        <div className="div-user-info">
          <span className="span-user">{props.user}</span>
          <span className="span-employ">{props.employ}</span>
        </div>
        <Link to="/">
          <span className="a-sair">Sair</span>
        </Link>
      </div>
      <a className="hamburguinho" href="/menu">
        <img src={Hamburguinho} alt="" />
      </a>
    </header>
  );
};

export default Header;
