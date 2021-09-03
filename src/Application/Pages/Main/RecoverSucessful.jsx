import React from "react";
import { Link } from "react-router-dom";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import Button from "../../Components/Sub/Button";
import Email from "../../../Assets/Email.gif";
import "./RecoverSucessful.css";
import "../../../App.css";

const RecoverSucessful = () => {
  return (
    <div className="div-main-recover-sucessfull pageView ">
      <div className="div-sub-recover-sucessfull">
        <Titledecorated color="#474747" text="Recuperação de Senha Concluida" />
        <Title
          id="title-recover-sucessfull"
          size="1.3rem"
          text="Uma senha temporária foi encaminhada para o
        email de cadastro"
        />
        <div className="div-img-recover-sucessfull">
          <img src={Email} alt="" />
        </div>
        <Link to="/">
          <Button value="Login" />
        </Link>
      </div>
    </div>
  );
};

export default RecoverSucessful;
