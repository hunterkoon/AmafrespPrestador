import React from 'react';
import Titledecorated from './Shared/Titledecorated';
import Button from './Shared/Button';
import MainImage from '../Assets/Conta.svg';
import { dadosCliente } from '../Pages/Hooks/dadosCliente';
import './Home.css';

const Home = () => {
  return (
    <div className="div-main-home">
      <Titledecorated text={`Olá,${dadosCliente[0].DADOS[0].NOME}`} />
      <img src={MainImage} alt="" />

      <p>
        Seja bem vindo ao novo Portal Amafresp . Agora você pode consultar seus
        dados,realizar o recadastramento entre outras funcionalidades. Em caso
        de dúvidas, consulte o nosso Regulamento.
      </p>

      <Button value="Recadastrar" />
    </div>
  );
};

export default Home;
