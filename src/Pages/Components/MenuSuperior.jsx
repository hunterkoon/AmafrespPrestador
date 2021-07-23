import React from 'react';
import './MenuSuperior.css';
import Button_Back from '../../Assets/Button_Back.svg';

import User_Profile from '../../Assets/UserProfille.svg';
import { GlobalContext } from '../GlobalContext';
import { Link } from 'react-router-dom';

const MenuSuperior = () => {
  const { profile, setProfile, data, login } = React.useContext(GlobalContext);
  return (
    <>
      <div className="main-div-menu">
        <div className="main-h1-menu">
          <h1>Dados Prestador / Usuário</h1>
        </div>
        <div
          style={{
            height: '0vh',
          }}
          className="main-div-dados-menu"
        >
          <div className="prestador-div-menu">
            <ul>
              <li>
                <h2>Empresa:</h2>
                {/* <h4>{data[0].EMPRESA}</h4> */}
                <h4>{'Lorem Ipsum'}</h4>
              </li>
              <li>
                <h2>CNPJ:</h2>
                {/* <h4>{data[0].CNPJ}</h4> */}
                <h4>{'Lorem Ipsum'}</h4>
              </li>

              <li>
                <h2>Segmento:</h2>
                {/* <h4>{data[0].SEGMENTO}</h4> */}
                <h4>{'Lorem Ipsum'}</h4>
              </li>
              <li>
                <h2>Tipo Credenciado: </h2>
                {/* <h4>{data[0].TIPO_CREDENCIADO}</h4> */}
                <h4>{'Lorem Ipsum'}</h4>
              </li>
            </ul>
          </div>

          <div className="colab-div-menu">
            <ul>
              <li>
                <h2>Nome:</h2>
                {/* <h4>{data[0].NOME}</h4> */}
                <h4>{'Lorem Ipsum'}</h4>
              </li>
              <li>
                <h2>Departamento:</h2>
                {/* <h4>{data[0].DEPARTAMENTO}</h4> */}
                <h4>{'Lorem Ipsum'}</h4>
              </li>

              <li>
                <section className="colab-section-user">
                  <Link to="/conta/perfil">
                    <img className="colab-img-user" src={User_Profile} alt="" />
                    <span
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Perfil
                    </span>
                  </Link>
                </section>
              </li>
            </ul>
            <img
              onClick={() => setProfile(!profile)}
              className="img-back"
              src={Button_Back}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
  // ) : null;
};

export default MenuSuperior;
