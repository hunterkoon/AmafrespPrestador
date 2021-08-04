import React from 'react';
import { Link } from 'react-router-dom';
import './MenuSuperior.css';
import Button_Back from '../../Assets/Button_Back.svg';
import User_Profile from '../../Assets/UserProfille.svg';
import { GlobalContext } from '../GlobalContext';
import Button from '../Shared/Button';

const MenuSuperior = () => {
  const { profile, setProfile, data, login } = React.useContext(GlobalContext);
  return (
    <>
      <div
        className={
          profile && login ? 'main-div-menu' : 'main-div-menu-deactived '
        }
      >
        <div className="main-h1-menu">
          <h1>Dados Prestador / Usuário</h1>
          <span onClick={() => setProfile(false)} className="span-buttons">
            <Button color="#E20000" value="X" textColor="#ffff" />
            <Button color="#017663 " value="Perfil" textColor="#ffff" />
          </span>
        </div>
        <div className="main-div-dados-menu">
          <div className="prestador-div-menu">
            <ul>
              <li>
                <h2>Empresa:</h2>
                <h4>{data ? data[0].EMPRESA : 'Erro'}</h4>
              </li>
              <li>
                <h2>CNPJ:</h2>
                <h4>{data ? data[0].CNPJ : 'Erro'}</h4>
              </li>

              <li>
                <h2>Segmento:</h2>
                <h4>{data ? data[0].SEGMENTO : 'Erro'}</h4>
              </li>
              <li>
                <h2>Tipo Credenciado: </h2>
                <h4>{data ? data[0].TIPO_CREDENCIADO : 'Erro'}</h4>
              </li>
            </ul>
          </div>

          <div className="colab-div-menu">
            <ul>
              <li>
                <h2>Nome:</h2>
                <h4>{data ? data[0].NOME : 'Erro'}</h4>
              </li>
              <li>
                <h2>Departamento:</h2>
                <h4>{data ? data[0].DEPARTAMENTO : 'Erro'}</h4>
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
