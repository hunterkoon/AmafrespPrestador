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

  const loginFields = [
    {
      id: 'cpfCNPJ',
      type: 'text',
      require: 'true',
      label: 'CPF/CNPJ',
      maxLength: '18',
    },
    {
      id: 'user',
      type: 'text',
      require: 'true',
      label: 'Usuário / E-mail',
    },
    {
      id: 'senha',
      type: 'password',
      require: 'true',
      label: 'Senha',
      maxLength: '18',
    },
  ];
  const [fieldsLogin, setFieldsLogin] = React.useState(
    loginFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFieldsLogin({ ...fieldsLogin, [id]: value });
  };

  const handleSubmit = (event) => {
    // ADD FETCH POST
    event.preventDefault();
    setLogin(true);
  };

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
        <form onSubmit={handleSubmit}>
          {loginFields.map(
            ({ id, label, type, require, pattern, title, maxLength }) => (
              <Input
                key={id}
                maxLength={maxLength}
                title={title}
                pattern={pattern}
                label={label}
                type={type}
                id={id}
                // require={require}
                value={fieldsLogin[id]}
                onChange={handleChange}
              />
            ),
          )}

          <div className="button-div">
            <Button value="Entrar"></Button>
            <div className="links-menu">
              <Link to="/RecuperarSenha/">
                <p>Recuperar senha</p>
              </Link>
              <Link to="/PrimeiroAcesso/">
                <p>Primeiro acesso</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
