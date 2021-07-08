import React from 'react';
import './Header.css';
import Logotipo from '../../Assets/Logo Amafresp.svg';
import Hamburguinho from '../../Assets/Hamburguinho.svg';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import { dadosCliente } from '../Hooks/dadosCliente';

export default function Header() {
  const { click, setClick } = React.useContext(GlobalContext);
  return (
    <header className="Header">
      <div className="div-img-logotipo">
        <img src={Logotipo} alt="Logotipo Amafresp" />
      </div>
      {dadosCliente && click === true ? (
        <div className="main-div-user">
          <div className="div-user-info">
            <span className="span-user">
              {dadosCliente[0].DADOS[0].NOME.toUpperCase()}
            </span>
            <span className="span-employ">
              {dadosCliente[0].DADOS[0].EMPRESA.toUpperCase()}
            </span>
          </div>
          <Link to="/">
            <span onClick={() => setClick(!click)} className="a-sair">
              Sair
            </span>
          </Link>
        </div>
      ) : null}
      <a onClick={() => setClick(!click)} className="hamburguinho" href="#menu">
        <img src={Hamburguinho} alt="" />
      </a>
    </header>
  );
}
