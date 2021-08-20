import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { GlobalContext } from "./GlobalContext";
import { UrlRecuperarSenha } from "../../Shared/Commons/Constants/image-url-primeiro-acesso";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import Input from "../../Components/Sub/Input";
import Button from "../../Components/Sub/Button";
import SwitchButton from "../../Components/Sub/SwitchButton";
import RecuperarSenhaImg from "../../../Assets/RecuperacaoSenha.svg";
import IconDoubt from '../../../Assets/IconDoubt.svg'
import './Login.css'
import "./RecuperarSenha.css";
import "../../../App.css";

const RecuperarSenha = () => {

  const { option, recoverData, setRecoverData } = React.useContext(GlobalContext);
  const { recoverFiedsAdm, recoverFiedsCommon } = GeneralForms(recoverData);


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
      list.map(({ id, label, require, type, key, changeBlur, changeFocus, mask, maxLength }) => (
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
            maxLength={maxLength}
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
