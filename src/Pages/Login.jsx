import React from 'react';
import Input from './Shared/Input';
import './Login.css';
import LoginImg from '../Assets/Login_IMG.svg';
import Title from '../Pages/Shared/Title';
import Button from './Shared/Button';
import Titledecorated from './Shared/Titledecorated';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Pages/GlobalContext';
const Login = () => {
  const { error, setLogin } = React.useContext(GlobalContext);

  let inputWidth = '95%';

  return (
    <div className="main-login">
      <div className="image-login-div">
        <img src={LoginImg} alt="Imagem de Profissionais da medicina" />
      </div>
      <div className="login">
        <div className="titles">
          <Titledecorated text="Login" />
          <Title text="Portal Amafresp Prestador" />
        </div>
        <form
          action="POST"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          <Input
            error={error}
            id="cnpj"
            className="input"
            type={'text'}
            placeholder={'CNPJ/CPF'}
            width={inputWidth}
            label={'CNPJ/CPF'}
          />
          <Input
            error={error}
            id="user"
            type={'text'}
            placeholder={'Usuário'}
            width={inputWidth}
            label={'USUÁRIO'}
          />
          <Input
            error={error}
            id="password"
            type={'password'}
            placeholder={'Senha'}
            width={inputWidth}
            label={'SENHA'}
          />

          <div className="button-div" onClick={() => setLogin(true)}>
            <Link to="/conta">
              <Button value="Entrar"></Button>
            </Link>
          </div>
          <div className="links-menu">
            <Link to="/recuperarsenha/">
              <p>Recuperar senha</p>
            </Link>
            <Link to="/PrimeiroAcesso/">
              <p>Primeiro acesso</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
