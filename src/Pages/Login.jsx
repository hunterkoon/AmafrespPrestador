import React from 'react';
import Input from './Shared/Input';
import './Login.css';
import LoginImg from '../Assets/Login_IMG.svg';
import Title from '../Pages/Shared/Title';
import Button from './Shared/Button';

const Login = () => {
  let inputWidth = '90%';

  // const [inputWidth, setinputWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setinputWidth(window.innerWidth / 3);
  // }, [window.innerWidth]);

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
        <form action="">
          <Input
            className="input"
            type={'text'}
            placeholder={'CNPJ/CPF'}
            width={inputWidth}
            label={'CNPJ/CPF'}
          />
          <Input
            type={'text'}
            placeholder={'Usuário'}
            width={inputWidth}
            label={'USUÁRIO'}
          />
          <Input
            type={'password'}
            placeholder={'Senha'}
            width={inputWidth}
            label={'SENHA'}
          />
          <div className="button-div">
            <Button value="Entrar" />
          </div>
          <div className="links-menu">
            <p>Recuperar senha</p>
            <p>Primeiro acesso</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
