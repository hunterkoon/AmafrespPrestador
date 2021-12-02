import React from "react";
import { GlobalContext } from "./GlobalContext";
import { UrlPrimeiroAcesso } from "../../Shared/Commons/Constants/image-url-primeiro-acesso";
import { firstAcessSubmit } from "../../Hooks/useSubmitDada";
import { useNavigate } from "react-router-dom";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import useInputs from "../../Hooks/useInputs";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import Button from "../../Components/Sub/Button";
import PrimeiroAcessoImg from "../../../Assets/PrimeiroAcesso.svg";
import useErrorForm from "../../Hooks/useErrorForm";
import Error from '../../Components/Sub/Error'
import "./FirstAccess.css";
import Freepik from "../../Shared/Commons/Constants/Freepik";

const FirstAccess = () => {

  const { firtAcessData, setFirtAcessData, _FirstAcess } = React.useContext(GlobalContext);
  const firstAcessSubmitData = firstAcessSubmit(firtAcessData);
  const { firstAcessForm } = GeneralForms(firtAcessData);
  const erroForm = useErrorForm(firstAcessForm);
  const { useInputsGeneral } = useInputs()
  const navigate = useNavigate();

  const [primeiroAcesso, setPrimeiroAcesso] = React.useState(
    firstAcessForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setPrimeiroAcesso({ ...primeiroAcesso, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (erroForm) {
      _FirstAcess(firstAcessSubmitData);
    }
  };

  React.useEffect(() => {
    setFirtAcessData(primeiroAcesso);
  }, [primeiroAcesso, setFirtAcessData]);

  return (
    <div className="div-main-primeiro-acesso pageView">
      <div className="div-img-primeiro-acesso">
        <img src={PrimeiroAcessoImg} alt="Imagem menina usando celular" />
        <a
          target="_blank"
          style={{ color: "#FDFDFD" }}
          href={UrlPrimeiroAcesso}
          rel="noreferrer"
        >
          s Website vector created by stories - www.freepik.com
        </a>
      </div>
      <div className="div-form-primeiro-acesso">
        <form onSubmit={handleSubmit}>
          <Titledecorated text="Primeiro Acesso" />
          <Title text="Portal Amafresp Prestador" />
          {useInputsGeneral(firstAcessForm, handleChange, primeiroAcesso)}
          <Error />
          <div className="div-button-form-primeiro-acesso">
            <Button value="Registrar" />
          </div>
        </form>
      </div>
      <Freepik />
    </div>
  );
};

export default FirstAccess;
