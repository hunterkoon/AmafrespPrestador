import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Main/GlobalContext";
import { UrlImgLogin } from "../../Shared/Commons/Constants/image-url-primeiro-acesso";
import useFetch from "../../Hooks/useFetch";
import Input from "../../Components/Sub/Input";
import Button from "../../Components/Sub/Button";
import Title from "../../Components/Sub/Title";
import Titledecorated from "../../Components/Sub/Titledecorated";
import SwitchButton from "../../Components/Sub/SwitchButton";
import LoginImg from "../../../Assets/Login_2.svg";
import UsuarioLogin from "../../../Assets/UsuarioLogin.svg";
import IconDoubt from '../../../Assets/IconDoubt.svg'
import GeneralForms from "../../Shared/Forms/GeneralForms";
import "./Login.css";
import "../../../App.css";

const Login = () => {
  const { setLogin, option, setLoginData, loginData } = React.useContext(GlobalContext);
  const { data } = useFetch();
  const {loginCommon , loginAdm} = GeneralForms(loginData)

  const [fieldsLogin, setFieldsLogin] = React.useState(
    loginCommon.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFieldsLogin({ ...fieldsLogin, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogin(true);
  };

  const handlerMapping = (type) => {
    return type.map(
      ({ key, id, label, type, require, pattern, title, maxLength, mask , changeBlur, changeFocus, error }) => (

          <Input
           className='menuView'
            key={key}
            maxLength={maxLength}
            title={title}
            pattern={pattern}
            label={label}
            type={type}
            id={id}
            value={fieldsLogin[id]}
            onChange={handleChange}
            mask={mask}
            changeBlur={changeBlur}
            changeFocus={changeFocus}
            error = {error}
           require={require}
          />
      
      )
    );
  };

  React.useEffect(() => {
    setLoginData(fieldsLogin)
  }, [fieldsLogin, setLoginData])

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
                text={option ? "Login - Usuário" : "Login - Administrador"}
              />
              <Title text="Portal Amafresp Prestador" />
            </div>
            <div className='div-switch-login'>
              <SwitchButton width={"85%"} rounded={true} />
              <Link to='/Help/'><img src={IconDoubt} alt="" /></Link>
            </div>
            <form onSubmit={handleSubmit}>
              
              {handlerMapping(option ? loginCommon : loginAdm)}

              <div className={!option ? 'div-button-login' : 'div-button-login-user'}>
                <Button value="Entrar"></Button>
                <div className={option ? null : "div-links-login"}>
                  <Link to="/RecuperarSenha/">
                    <p>Recuperar senha</p>
                  </Link>
                  {!option ?
                    <Link to="/PrimeiroAcesso/">
                      <p>Primeiro acesso</p>
                    </Link> : null}
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
