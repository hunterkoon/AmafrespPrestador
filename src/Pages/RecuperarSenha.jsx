import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { GlobalContext } from "./GlobalContext";
import { UrlRecuperarSenha } from "./Shared/Commons/constant/image-url-primeiro-acesso";
import { FormRecuperacao } from "./Shared/Commons/constant/FormRecuperacao";
import RecuperarSenhaImg from "../Assets/RecuperacaoSenha.svg";
import Titledecorated from "../Pages/Shared/Titledecorated";
import IconDoubt from '../Assets/IconDoubt.svg'
import Title from "./Shared/Title";
import Input from "./Shared/Input";
import Button from "./Shared/Button";
import SwitchButton from "./Shared/SwitchButton";
import './Login.css'
import "./RecuperarSenha.css";
import "../App.css";

const RecuperarSenha = () => {
  
  const { option , recoverData , setRecoverData } = React.useContext(GlobalContext);
  const { recoverFiedsAdm, recoverFiedsCommon} = FormRecuperacao(recoverData);


  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO - Adicionar Validação através de fetch com retorno 200
    navigate("/RecuperacaoSucessfull");
  };



  const [recover, setRecover] = React.useState(
    recoverFiedsAdm.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: "",
      };
    }, {})
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setRecover({ ...recover, [id]: value });
  };


  const recoverFields = (list) => {
    return (
      list.map(({ id, label, require, type, key, changeBlur, changeFocus,mask}) => (
        <div key={key} className="menuView">
          <Input
            key={id}
            id={id}
            label={label}
            require={require}
            type={type}
            onChange={handleChange}
            value={recover[id]}
            changeBlur={changeBlur}
            changeFocus={changeFocus}
            mask={mask}
          />
        </div>
      ))
    )

  }

  React.useEffect(() => {
    setRecoverData(recover)
  }, [recover, setRecoverData])


  return (
    <>
      <div className="div-main-recuperar-senha pageView">
        <div className="div-img-recuperar-senha">
          <img src={RecuperarSenhaImg} alt="" />
          <a href={UrlRecuperarSenha}>www.freepik.com</a>
        </div>
        
        <div className="div-form-recuperar-senha">
          <form onSubmit={handleSubmit}>
            <Titledecorated
              text={
                option
                  ? "Recuperação de Senha - Usuário "
                  : "Recuperação de Senha - Administrador"
              }
            />
            <Title text="Portal Amafresp Prestador" />
            <div className='div-switch-login'>

              <SwitchButton
                width={"85%"}
                rounded={true} />
              <Link to='/Help/'>
                <img src={IconDoubt} alt="" />
              </Link>
            </div>

            {recoverFields(!option
              ? recoverFiedsAdm
              : recoverFiedsCommon
            )}

            <div className="div-button-recuperar-senha">
              <Button value="Recuperar" />
              <Link to="/RecuperarEmail">
                Esqueci meu e-mail
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecuperarSenha;
