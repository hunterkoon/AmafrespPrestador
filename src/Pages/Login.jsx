import React from 'react';
import Input from './Shared/Input';
import './Login.css';
import LoginImg from '../Assets/Login_IMG.svg';
import Title from '../Pages/Shared/Title';
import Button from './Shared/Button';

const Login = () => {
  return (
    <div className="Main-login">
      <div className="Image-login-div">
        <img src={LoginImg} alt="Imagem de Profissionais da medicina" />
      </div>
      <div className="Login">
        <div className="titles">
          <Title text="Login" color="#474747" />
          <Title text="Portal Amafresp Prestador" />
        </div>
        <Input
          type={'text'}
          placeholder={'CNPJ/CPF'}
          width={'20em'}
          label={'CNPJ/CPF'}
        />
        <Input
          type={'text'}
          placeholder={'Usuário'}
          width={'20em'}
          label={'USUÁRIO'}
        />
        <Input
          type={'password'}
          placeholder={'Senha'}
          width={'20em'}
          label={'SENHA'}
        />

        <Button value="Entrar" />
      </div>
    </div>
  );
};

export default Login;
