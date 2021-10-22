import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Main/GlobalContext';
import { UrlImgLogin } from '../../Shared/Commons/Constants/image-url-primeiro-acesso';
import useInputs from '../../Hooks/useInputs';
import Button from '../../Components/Sub/Button';
import Title from '../../Components/Sub/Title';
import Titledecorated from '../../Components/Sub/Titledecorated';
import SwitchButton from '../../Components/Sub/SwitchButton';
import LoginImg from '../../../Assets/Login_2.svg';
import UsuarioLogin from '../../../Assets/UsuarioLogin.svg';
import IconDoubt from '../../../Assets/IconDoubt.svg';
import GeneralForms from '../../Shared/Forms/GeneralForms';
import Error from '../../Components/Sub/Error'
import { loginDataCNPJSubmit, loginDataCPFSubmit } from '../../Hooks/useSubmitDada';
import './Login.css';
import '../../../App.css';

const Login = () => {

  // IMPORTA DO CONTEXTO GLOBAL INFORMAÇÕES DE OPÇÃO DE ENTRADA E LOGIN
  const { useInputsGeneral } = useInputs();
  const { option, setLoginData, loginData, _LoginValidate, AutoLogin } = React.useContext(GlobalContext);

  // CONSTANTES IMPORTADAS PARA GERAR FORMS
  const { loginCommon, loginAdm } = GeneralForms(loginData);
  const loginADMSubmit = loginDataCNPJSubmit(loginData);
  const loginCOMSubmit = loginDataCPFSubmit(loginData);

  // ATUALIZA LISTA ATUAL DE ARRAYS COM ITENS ANTERIORES
  const variable = option ? loginCommon : loginAdm;
  const [fieldsLogin, setFieldsLogin] = React.useState(
    variable.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );

  // FUNÇÃO ATUALIZADORA, PASSA PARA ESTADO GLOBAL ARRAY ATUALIZADO
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFieldsLogin({ ...fieldsLogin, [id]: value });
  };

  // FUNÇÃO ATUALIZADORA
  React.useEffect(() => {
    setLoginData(fieldsLogin);
  }, [fieldsLogin, setLoginData, variable]);

  // TODO FUNÇÃO DE FETCH
  const handleSubmit = (event) => {
    event.preventDefault();
    _LoginValidate(option ? loginCOMSubmit : loginADMSubmit);
  };
  React.useEffect(() => {
    AutoLogin();
  }, [])

  return (
    <>
      <div className="div-main-login pageView">
        <div className="div-img-login">
          <div>
            <img
              className={option ? 'pageView' : 'pageViewDrop'}
              src={option ? UsuarioLogin : LoginImg}
              alt="Imagem de Profissionais da medicina"
            />
            <a href={UrlImgLogin}>www.freepik.com</a>
          </div>
        </div>
        <div className="div-form-login">
          <div className="div-input-login">
            <div className="div-titles-login">
              <Titledecorated
                text={option ? 'Login - Usuário' : 'Login - Administrador'}
              />
              <Title text="Portal Amafresp Prestador" />
            </div>
            <div className="div-switch-login">
              <SwitchButton rounded={true} />
              <Link to="/Help/">
                <img src={IconDoubt} alt="" />
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              {useInputsGeneral(
                option ? loginCommon : loginAdm, // list of inputs
                handleChange, // functions the atualization
                fieldsLogin, // values
                'menuView', // class
              )}
              <Error />
              <div
                className={
                  !option ? 'div-button-login' : 'div-button-login-user'
                }
              >
                <Button value="Entrar"></Button>
                <div className={option ? null : 'div-links-login'}>
                  <Link to="/RecuperarSenha/">
                    <p>Recuperar senha</p>
                  </Link>
                  {!option ? (
                    <Link to="/PrimeiroAcesso/">
                      <p>Primeiro acesso</p>
                    </Link>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
