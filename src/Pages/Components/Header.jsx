import React from 'react';
import './Header.css';
import Logotipo from '../../Assets/Logo Amafresp.svg';
import Hamburguinho from '../../Assets/Hamburguinho.svg';
import Seta from '../../Assets/Seta_Verde.svg';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import MenuSuperior from './MenuSuperior';

export default function Header() {
  const { data, setProfile, profile, login, setLogin } =
    React.useContext(GlobalContext);

  const logout = () => {
    setLogin(false);
    setProfile(false);
  };
  return (
    <>
      <MenuSuperior />
      <header className="Header">
        <div className="div-img-logotipo">
          <Link to="/">
            <img src={Logotipo} alt="Logotipo Amafresp" />
          </Link>
        </div>
        {login ? (
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
              <span className="span-user">{data.NOME}</span>
              <span className="span-employ">{data.EMPRESA}</span>
            </div>
          </div>
        ) : null}
        <div onClick={logout} className="div-sair">
          <Link to="/">Sair</Link>
        </div>
        <a onClick={() => logout} className="hamburguinho" href="#menu">
          <img src={Hamburguinho} alt="" />
        </a>
      </header>
    </>
  );
}
