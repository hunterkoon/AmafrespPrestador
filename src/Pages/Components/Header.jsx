import React from 'react';
import './Header.css';
import Logotipo from '../../Assets/Logo Amafresp.svg';
import Hamburguinho from '../../Assets/Hamburguinho.svg';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import MenuSuperior from './MenuSuperior';

export default function Header() {
  const { click, setClick, dados, setDados, setProfile, profile } =
    React.useContext(GlobalContext);

  const logout = () => {
    setClick(!click);
    setDados({});
  };
  return (
    <>
      <MenuSuperior />
      <header className="Header">
        <div className="div-img-logotipo">
          <img src={Logotipo} alt="Logotipo Amafresp" />
        </div>
        {dados && click === true ? (
          <div onClick={() => setProfile(!profile)} className="main-div-user">
            <div className="div-user-info">
              <span className="span-user">{dados.NOME.toUpperCase()}</span>
              <span className="span-employ">{dados.EMPRESA.toUpperCase()}</span>
            </div>
            <Link to="/">
              <span onClick={() => setClick(!click)} className="a-sair">
                Sair
              </span>
            </Link>
          </div>
        ) : null}
        <a onClick={() => logout} className="hamburguinho" href="#menu">
          <img src={Hamburguinho} alt="" />
        </a>
      </header>
    </>
  );
}
