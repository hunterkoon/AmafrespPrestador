import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import { UrlRecuperarSenha } from "../../Shared/Commons/Constants/image-url-primeiro-acesso";
import { recoverAdmPasswordSubmit, recoverCommonPasswordSubmit } from "../../Hooks/useSubmitDada";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import Button from "../../Components/Sub/Button";
import SwitchButton from "../../Components/Sub/SwitchButton";
import RecuperarSenhaImg from "../../../Assets/RecuperacaoSenha.svg";
import IconDoubt from "../../../Assets/IconDoubt.svg";
import useInputs from "../../Hooks/useInputs";
import useErrorForm from "../../Hooks/useErrorForm";
import Error from '../../Components/Sub/Error'
import "./Login.css";
import "./RecoverPassword.css";
import Freepik from "../../Shared/Commons/Constants/Freepik";

const RecoverPassword = () => {

  const { useInputsGeneral } = useInputs()
  const { option, recoverData, setRecoverData, _RecoverPassword } = React.useContext(GlobalContext);
  const { recoverFiedsAdm, recoverFiedsCommon } = GeneralForms(recoverData);
  const erroFormADM = useErrorForm(recoverFiedsAdm);
  const erroFormCommon = useErrorForm(recoverFiedsCommon);
  const recoverAdmSubmit = recoverAdmPasswordSubmit(recoverData);
  const recoverCommonSubmit = recoverCommonPasswordSubmit(recoverData);

  // REALIZA REDUCE DO FORMULARIO

  const [recover, setRecover] = React.useState(
    !option
      ? recoverFiedsAdm.reduce((acc, item) => {
        return {
          ...acc,
          [item.id]: "",
        };
      }, {})
      : recoverFiedsCommon.reduce((acc, item) => {
        return {
          ...acc,
          [item.id]: "",
        };
      }, {})
  );

  // FUNCAO ATUALIZADORA 

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setRecover({ ...recover, [id]: value });
  };

  React.useEffect(() => {
    setRecoverData(recover);
  }, [recover, setRecoverData]);

  // SUBMIT TODO FETCH

  const handleSubmit = (event) => {
    event.preventDefault();
    if (erroFormADM === true && erroFormCommon === true) {
      _RecoverPassword(option ? recoverCommonSubmit : recoverAdmSubmit)
    }
  };


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
            <div className="div-switch-login">
              <SwitchButton rounded={true} />
              <Link to="/Help/">
                <img src={IconDoubt} alt="" />
              </Link>
            </div>

            {useInputsGeneral(
              option ? recoverFiedsCommon : recoverFiedsAdm, // list of inputs
              handleChange, // actualization function
              recover, // values
              "menuView" // class
            )}
            <Error />
            <div className="div-button-recuperar-senha">
              <Button value="Recuperar" />
              {/* <Link to="/RecuperarEmail">Esqueci meu e-mail</Link> */}
            </div>
          </form>
        </div>
        <Freepik />
      </div>
    </>
  );
};

export default RecoverPassword;
