import React from 'react';
import './MenuSuperior.css';
import Button_Back from '../../Assets/Button_Back.svg';
import User_Profile from '../../Assets/UserProfille.svg';
import { GlobalContext } from '../GlobalContext';
import { Link } from 'react-router-dom';

const MenuSuperior = () => {
  const { dados, profile, setProfile } = React.useContext(GlobalContext);

  return dados && profile ? (
    <div
      style={{
        opacity: profile === true ? '100%' : '0%',
      }}
      onClick={() => setProfile(!profile)}
      className="main-div-menu"
    >
      <div className="main-h1-menu">
        <h1>Dados Prestador / Usuário</h1>
      </div>
      <div className="main-div-dados-menu">
        <div className="prestador-div-menu">
          <ul>
            <li>
              <h2>Empresa:</h2>
              <h4>{dados.EMPRESA}</h4>
            </li>
            <li>
              <h2>CNPJ:</h2>
              <h4>{dados.CNPJ}</h4>
            </li>

            <li>
              <h2>Segmento:</h2>
              <h4>{dados.SEGMENTO}</h4>
            </li>
            <li>
              <h2>Tipo Credenciado: </h2>
              <h4>{dados.TIPO_CREDENCIADO}</h4>
            </li>
          </ul>
        </div>

        <div className="colab-div-menu">
          <ul>
            <li>
              <h2>Nome:</h2>
              <h4>{dados.NOME}</h4>
            </li>
            <li>
              <h2>Departamento:</h2>
              <h4>{dados.DEPARTAMENTO}</h4>
            </li>
            <section className="colab-section-profile">
              <Link to="/conta/perfil">
                <img src={User_Profile} alt="" />
                Perfil
              </Link>
            </section>
          </ul>
          <img className="img-back" src={Button_Back} alt="" />
        </div>
      </div>
    </div>
  ) : null;
};

export default MenuSuperior;
