import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import Button from '../Shared/Button';
import MainImage from '../../Assets/Conta.svg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="div-main-home">
      {/* <Titledecorated text={`Olá,${'SomeBody'}`} /> */}
      <Titledecorated text="Olá Visitante" />

      <div className="div-img">
        <img src={MainImage} alt="" />
      </div>

      <div className="div-text">
        <p>
          Seja bem vindo ao novo Portal Amafresp . Agora você pode consultar
          seus dados,realizar o recadastramento entre outras funcionalidades. Em
          caso de dúvidas, consulte o nosso Regulamento.
        </p>
      </div>
      <div className="button-recadastrar">
        <Link to="Recadastramento">
          <Button value="Recadastrar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
