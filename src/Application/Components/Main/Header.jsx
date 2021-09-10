import React from 'react';
import { GlobalContext } from '../../Pages/Main/GlobalContext';
import { useNavigate } from 'react-router';
import MenuSuperior from './MenuSuperior';
import Hamburguer from './Hamburguer';
import Seta from '../../../Assets/Seta_Verde.svg';
import Logotipo from '../../../Assets/Logo Amafresp.svg';
import './Header.css';

export default function Header() {
  const {
    // data,
    setProfile,
    profile,
    login,
    handleWindowHamburguer,
    setAnimateMenu,
    width,
    handleLogout,
  } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setProfile(!profile);
    setAnimateMenu(false);
  };

  const handleLogo = () =>{
    if(login){
      navigate('/conta');
    }else{
      navigate('/');
    }
  }
  return (
    <React.Fragment>
      <MenuSuperior />
      <header className="Header">
        <div className="div-img-logotipo">
          <img
            onClick={handleLogo}
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
                { 'Lorem Ipsum Zupoi'}
              </span>
              <span className="span-employ">
                {'Lorem Ipsum Gumoi'}
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
