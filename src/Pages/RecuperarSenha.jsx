import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { GlobalContext } from "./GlobalContext";
import { UrlRecuperarSenha } from "./Shared/Commons/constant/image-url-primeiro-acesso";
import Title from "./Shared/Title";
import Input from "./Shared/Input";
import Button from "./Shared/Button";
import Titledecorated from "../Pages/Shared/Titledecorated";
import RecuperarSenhaImg from "../Assets/RecuperacaoSenha.svg";
// import Modal from "./Components/Modal";
import { recoverFiedsAdm } from "./Shared/Commons/constant/form-recuperacao";
import "./RecuperarSenha.css";
import "../App.css";

const RecuperarSenha = () => {
  const { option } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicionar Validação através de fetch com retorno 200
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

  return (
    <>
      <div className="div-main-recuperar-senha pageView">
        <div className="div-img-recuperar-senha">
          <img src={RecuperarSenhaImg} alt="" />
          <a href={UrlRecuperarSenha}>www.freepik.com</a>
        </div>
        <div className="div-form-recuperar-senha">
          {/* <div className="div-inputs-recuperar-senha"> */}
          <form onSubmit={handleSubmit}>
            <Titledecorated
              text={
                option
                  ? "Recuperação de Senha - Usuário "
                  : "Recuperação de Senha - Administrador"
              }
            />
            <Title text="Portal Amafresp Prestador" />
            {/* <Modal /> */}
            {recoverFiedsAdm.map(({ id, label, require, type }) => (
              <Input
                key={id}
                id={id}
                label={label}
                require={require}
                type={type}
                onChange={handleChange}
                value={recover[id]}
              />
            ))}
            <div className="div-button-recuperar-senha">
              <Button value="Recuperar" />
              {/* Caso a resposta retornar 200 Mudar página */}
              <Link to="/RecuperarEmail">Esqueci meu e-mail</Link>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default RecuperarSenha;
