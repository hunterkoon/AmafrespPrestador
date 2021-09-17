import React from "react";

import { GlobalContext } from "./GlobalContext";
import { UrlPrimeiroAcesso } from "../../Shared/Commons/Constants/image-url-primeiro-acesso";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import useInputs from "../../Hooks/useInputs";
import { useNavigate } from "react-router-dom";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import Button from "../../Components/Sub/Button";
import PrimeiroAcessoImg from "../../../Assets/PrimeiroAcesso.svg";
import useErrorForm from "../../Hooks/useErrorForm";
import { firstAcessSubmit } from "../../Hooks/useSubmitDada";
import "./PrimeiroAcesso.css";
import "../../../App.css";

const PrimeiroAcesso = () => {
  
  const {useInputsGeneral } = useInputs()
  const navigate = useNavigate();
  const { firtAcessData, setFirtAcessData } = React.useContext(GlobalContext);
  const { firstAcessForm } = GeneralForms(firtAcessData);
  const erroForm = useErrorForm(firstAcessForm);
  const firstAcessSubmitData = firstAcessSubmit(firtAcessData);

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

  React.useEffect(() => {
    setFirtAcessData(primeiroAcesso);
  }, [primeiroAcesso, setFirtAcessData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (erroForm) {
      navigate("/RegisterSucessful");
      console.log(firstAcessSubmitData);
    }

    //TODO  FETCH POST
  };

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

          <div className="div-button-form-primeiro-acesso">
            <Button value="Registrar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrimeiroAcesso;
