import React from 'react';
import { GlobalContext } from '../../MainPages/GlobalContext';
import { useNavigate } from 'react-router';
import MenuSuperior from './MenuSuperior';
import Hamburguer from './Hamburguer';
import Seta from '../../../Assets/Seta_Verde.svg';
import Logotipo from '../../../Assets/Logo Amafresp.svg';
import './Header.css';

export default function Header() {
  const {
    setLogin,
    data,
    setData,
    setProfile,
    profile,
    login,
    handleWindowHamburguer,
    handleLogoDirection,
    setAnimateMenu,
    width,
  } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setProfile(!profile);
    setAnimateMenu(false);
  };
  const handleLogout = () => {
    navigate('/');
    setLogin(false);
    setProfile(false);
    setAnimateMenu(false);
    setData(null);
  };
  return (
    <React.Fragment>
      <MenuSuperior />
      <header className="Header">
        <div className="div-img-logotipo">
          <img
            onClick={handleLogoDirection}
            src={Logotipo}
            alt="Logotipo Amafresp"
          />
        </div>
        {login ? (
          <div
            className="main-div-user"
            onClick={width <= '1024' ? handleClick : null}
          >
            <div onClick={handleClick} className="div-user-info-panel">
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
            <div onClick={handleClick} className="div-user-info">
              <span className="span-user">
                {data ? data[0].NOME : 'NOME USER'}
              </span>
              <span className="span-employ">
                {data ? data[0].EMPRESA : 'NOME USER'}
              </span>
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
