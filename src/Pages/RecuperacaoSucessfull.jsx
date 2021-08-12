import React from 'react';
import { Link } from 'react-router-dom';
import Titledecorated from './Shared/Titledecorated';
import Title from './Shared/Title';
import Email from '../Assets/Email.gif';
import Button from './Shared/Button';
import '../App.css';
import './RecuperacaoSucessfull.css';
const RecuperacaoSucessfull = () => {
  return (
    <div className="div-main-recuperacao-sucessfull pageView ">
      <div className="div-sub-recuperacao-sucessfull">
        <Titledecorated color="#474747" text="Recuperação de Senha Concluida" />
        <Title
          id="title-recuperacao-sucessfull"
          size="1.3rem"
          text="
        Sucesso!!! uma senha temporária foi encaminhada para o
        email de cadastro ****ds@med.com.br"
        />
        <div className="div-img-recuperacao-sucessfull">
          <img src={Email} alt="" />
        </div>
        <Link to="/">
          <Button value="Login" />
        </Link>
      </div>
    </div>
  );
};

export default RecuperacaoSucessfull;
