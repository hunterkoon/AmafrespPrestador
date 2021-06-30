import React from 'react';
import Input from './Shared/Input';

const Login = () => {
  return (
    <div>
      <p>Tela de Login</p>
      <Input type={'text'} placeholder={'CNPJ/CPF'} width={'10em'} />
      <Input type={'text'} placeholder={'Usuário'} width={'10em'} />
      <Input type={'password'} placeholder={'Senha'} width={'10em'} />
    </div>
  );
};

export default Login;
