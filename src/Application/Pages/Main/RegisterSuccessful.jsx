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
        <Titledecorated color="#474747" text="Registro de admininistrador Concluido!" />
        <Title
          id="title-register-successful"
          size="1.3rem"
          text="
        Sucesso!!! uma senha temporária será encaminhada pelo nosso time de credenciamento , aguarde a liberação do seu token!"
        />
        <div className="div-img-register-successful">
          <img src={Email} alt="" />
        </div>
        <Link to="/">
          <Button value="Login" />
        </Link>
      </div>
    </div>
  );
};

export default RegisterSucessfull;
