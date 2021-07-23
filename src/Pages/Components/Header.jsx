import React from 'react';
import './Header.css';
import Logotipo from '../../Assets/Logo Amafresp.svg';
import Hamburguer from './Hamburguer';
import Seta from '../../Assets/Seta_Verde.svg';
import MenuSuperior from './MenuSuperior';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';

export default function Header() {
  const {
    setLogin,
    data,
    setProfile,
    profile,
    login,
    handleWindowHamburguer,
    handleLogoDirection,
    animateMenu,
    setAnimateMenu,
  } = React.useContext(GlobalContext);

  const handleClick = () => {
    setProfile(!profile);
    setAnimateMenu(false);
  };
  const handleLogout = () => {
    setLogin(false);
    setProfile(false);
    console.log('logout');
  };
  return (
    <React.Fragment>
      {login && profile ? <MenuSuperior /> : null}
      <header className="Header">
        <div className="div-img-logotipo">
          <img
            onClick={handleLogoDirection}
            src={Logotipo}
            alt="Logotipo Amafresp"
          />
        </div>
        {login ? (
          <div onClick={handleClick} className="main-div-user">
            <div className="div-user-info-panel">
              <img
                id="user"
                style={{
                  transform: profile ? 'Rotate(0deg)' : 'Rotate(180deg)',
                }}
                className="Seta"
                src={Seta}
                alt=""
              />
            </div>
            <div className="div-user-info">
              <span className="span-user">{'NOME USER'}</span>
              <span className="span-employ">{'NOME EMPRESA'}</span>
            </div>
          </div>
        ) : null}

        <div
          onClick={handleLogout}
          className={login ? 'div-sair' : 'div-sair-nologin'}
        >
          Sair
        </div>

        {handleWindowHamburguer() && login ? (
          <div className="div-hamburguer">
            <Hamburguer />
          </div>
        ) : null}
      </header>
    </React.Fragment>
  );
}
