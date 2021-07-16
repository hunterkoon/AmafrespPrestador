import React from 'react';
import './Header.css';
import Logotipo from '../../Assets/Logo Amafresp.svg';
import Hamburguer from './Hamburguer';
import Seta from '../../Assets/Seta_Verde.svg';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import MenuSuperior from './MenuSuperior';

export default function Header() {
  const { data, setProfile, profile, login, logout, hamburguer } =
    React.useContext(GlobalContext);

  return (
    <>
      <MenuSuperior />
      <header className="Header">
        <div className="div-img-logotipo">
          <Link to="/">
            <img onClick={logout} src={Logotipo} alt="Logotipo Amafresp" />
          </Link>
        </div>
        {login && data ? (
          <div onClick={() => setProfile(!profile)} className="main-div-user">
            <div className="div-user-info-panel">
              <img
                id="user"
                style={{
                  transform:
                    profile === false ? 'Rotate(180deg)' : 'Rotate(0deg)',
                }}
                className="Seta"
                src={Seta}
                alt=""
              />
            </div>
            <div className="div-user-info">
              <span className="span-user">{data[0].NOME}</span>
              <span className="span-employ">{data[0].EMPRESA}</span>
            </div>
          </div>
        ) : null}
        <div onClick={logout} className="div-sair">
          <Link to="./">Sair</Link>
        </div>
        {hamburguer ? (
          <div className="div-hamburguer">
            <Hamburguer />
          </div>
        ) : null}
      </header>
    </>
  );
}
