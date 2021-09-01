import React from "react";
import Button from "./Button";
import Title from "./Title";
import Titledecorated from "./Titledecorated";
import "./Succesfull.css";
const Succesfull = ({ ...props }) => {
  return (
    <div  className={ props.alert ? "div-main-successfull" : 'div-main-successfull-deactived'}>
      <div className="div-titles-successfull">
        <Titledecorated text="Sucesso!!!" />
        <Title text="Usuário Registrado" />
      </div>
      <div className="div-button-successfull">
        <Button onClick={props.newUser}  value="Fechar" />
      </div>
    </div>
  );
};

export default Succesfull;
