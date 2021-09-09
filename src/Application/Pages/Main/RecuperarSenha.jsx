import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { GlobalContext } from "./GlobalContext";
import { UrlRecuperarSenha } from "../../Shared/Commons/Constants/image-url-primeiro-acesso";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import Button from "../../Components/Sub/Button";
import SwitchButton from "../../Components/Sub/SwitchButton";
import RecuperarSenhaImg from "../../../Assets/RecuperacaoSenha.svg";
import IconDoubt from "../../../Assets/IconDoubt.svg";
import { useInputsGeneral } from "../../Hooks/useInputs";
import {
  recoverAdmPassword,
  recoverCommonPassword,
} from "../../Hooks/useSubmitDada";
import useErrorForm from "../../Hooks/useErrorForm";
import "./Login.css";
import "./RecuperarSenha.css";
import "../../../App.css";

const RecuperarSenha = () => {
  const navigate = useNavigate();
  const { option, recoverData, setRecoverData } =
    React.useContext(GlobalContext);
  const { recoverFiedsAdm, recoverFiedsCommon } = GeneralForms(recoverData);

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

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setRecover({ ...recover, [id]: value });
  };
  React.useEffect(() => {
    setRecoverData(recover);
  }, [recover, setRecoverData]);

  const erroFormADM = useErrorForm(recoverFiedsAdm);
  const erroFormCommon = useErrorForm(recoverFiedsCommon);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (erroFormADM === true && erroFormCommon === true) {
      navigate("/RecoverSuccessful");
      console.log(recover);
    }

    if (option) {
      recoverCommonPassword(recover);
    } else {
      recoverAdmPassword(recover);
    }
    // TODO - Adicionar Validação através de fetch com retorno 200
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
            <div className="div-button-recuperar-senha">
              <Button value="Recuperar" />
              {/* <Link to="/RecuperarEmail">Esqueci meu e-mail</Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecuperarSenha;
