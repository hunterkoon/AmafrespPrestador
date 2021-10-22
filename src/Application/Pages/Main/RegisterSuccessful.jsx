import React from 'react';
import { Link } from 'react-router-dom';
import Titledecorated from '../../Components/Sub/Titledecorated';
import Title from '../../Components/Sub/Title';
import Button from '../../Components/Sub/Button';
import Email from '../../../Assets/Email.gif';
import './RegisterSucessfull.css';
import '../../../App.css';


const RegisterSucessfull = () => {
  return (
    <div className="div-main-register-successful pageView ">
      <div className="div-sub-register-successful">
        <Titledecorated color="#474747" text="Registro Concluido!" />
        <Title
          id="title-register-successful"
          size="1.3rem"
          text="Sucesso, acesse seu E-mail confirme seu Cadastro!"
        />
        <div className="div-img-register-successful">
          <img src={Email} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterSucessfull;
