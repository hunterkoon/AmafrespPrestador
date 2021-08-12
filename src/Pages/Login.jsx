import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Pages/GlobalContext";
import { loginCommon, loginAdm } from "./Shared/Commons/constant/form-login";
import { UrlImgLogin } from "./Shared/Commons/constant/image-url-primeiro-acesso";
import Input from "./Shared/Input";
import Button from "./Shared/Button";
import useFetch from "./Hooks/useFetch";
import Title from "../Pages/Shared/Title";
import Titledecorated from "./Shared/Titledecorated";
import LoginImg from "../Assets/Login_2.svg";
import UsuarioLogin from "../Assets/UsuarioLogin.svg";
import SwitchButton from "./Shared/SwitchButton";
import IconDoubt from '../Assets/IconDoubt.svg'
import "./Login.css";
import "../App.css";

const Login = () => {
  const { error, setLogin, option } = React.useContext(GlobalContext);
  const { data } = useFetch();

  //POST ITEM PARA O SERVIDOR E RECEBER RESPOSTA

  // React.useEffect(()=>{

  //   async function fetchData(){
  //     await  const request('http://localhost:3036/prestador')
  //   };

  // },[])

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
      ({ key, id, label, type, require, pattern, title, maxLength }) => (
        <div className="menuView" key={key}>
          <Input
            key={key}
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
        </div>
      )
    );
  };

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
