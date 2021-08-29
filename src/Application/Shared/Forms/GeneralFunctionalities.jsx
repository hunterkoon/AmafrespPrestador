import React from "react";
import update from "../../../Assets/Recadastro_White.svg";

const GeneralFunctionalities = (e) => {
  const className = "GENERAL-CHECKBOX-CLASS";
  const classNameActived = "GENERAL-CHECKBOX-CLASS-actived";

  const [upRegState, setUpRegState] = React.useState(true);
  const [sendXMLState, setSendXMLState] = React.useState(true);
  const [regNewUserState, setRegNewUserState] = React.useState(true);
  const [modUserState, setModUserState] = React.useState(true);

  function Functionalities(key, label, img, classname, state, value) {
    this.type = "checkbox";
    this.key = key;
    this.id = key;
    this.label = label;
    this.img = img;
    this.className = classname;
    this.value = value;
    this.onClick = function () {
      state(!value);
    };
  }

  const UpdadeRegister = new Functionalities(
    "update",
    "Atualização Cadastral",
    update,
    upRegState ? className : classNameActived,
    setUpRegState,
    upRegState
  );
  const SendXML = new Functionalities(
    "sendXML",
    "Enviar XML",
    update,
    sendXMLState ? className : classNameActived,
    setSendXMLState,
    sendXMLState
  );
  const RegisterNewUser = new Functionalities(
    "newUser",
    "Cadastrar Usuários",
    update,
    regNewUserState ? className : classNameActived,
    setRegNewUserState,
    regNewUserState
  );
  const ModifyUsers = new Functionalities(
    "modifyUser",
    "Gerenciar Usuários",
    update,
    modUserState ? className : classNameActived,
    setModUserState,
    modUserState
  );

  return {
    UpdadeRegister: UpdadeRegister,
    SendXML: SendXML,
    RegisterNewUser: RegisterNewUser,
    ModifyUsers: ModifyUsers,
  };
};

export default GeneralFunctionalities;
