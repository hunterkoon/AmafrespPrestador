import React from 'react';
import Input from './Shared/Input';
import './Login.css';
import LoginImg from '../Assets/Login_2.svg';
import Title from '../Pages/Shared/Title';
import Button from './Shared/Button';
import Titledecorated from './Shared/Titledecorated';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Pages/GlobalContext';
import useFetch from './Hooks/useFetch';
import '../App.css';
const Login = () => {
  const { error, setLogin } = React.useContext(GlobalContext);
  const { data } = useFetch();

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
  //POST ITEM PARA O SERVIDOR E RECEBER RESPOSTA

  // React.useEffect(()=>{

  //   async function fetchData(){
  //     await  const request('http://localhost:3036/prestador')
  //   };

  // },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogin(true);
  };

  return (
    <div className="div-main-login pageView">
      <div className="div-img-login">
        <img src={LoginImg} alt="Imagem de Profissionais da medicina" />
      </div>
      <div className="div-form-login">
        <div className="div-input-login">
          <div className="div-titles-login">
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
            <div className="div-button-login">
              <Button value="Entrar"></Button>
              <div className="div-links-login">
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
    </div>
  );
};

export default Login;
