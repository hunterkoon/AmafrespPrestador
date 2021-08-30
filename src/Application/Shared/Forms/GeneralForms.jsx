import React from "react";

import {
  CPF_CNPJ,
  EMAIL,
  EMAIL_CONFIRM,
  PASSWORD,
  PASSWORD_CONFIRM,
  USER,
  NAME,
  CEL_TELPHONE,
  TELPHONE,
  DEPARTMENT,
} from "./GeneralFields";
import {
  handleMask,
  handleErrorCpfCnpf,
  handleErrorPassword,
  handleErroEmail,
} from "../Commons/Helpers/HandleInputs";
import GeneralFunctionalities from "./GeneralFunctionalities";

const GeneralForms = (loginData) => {
  const [mask, setMask] = React.useState("");
  const [error, setError] = React.useState("");
  const [passwordState, setPasswordState] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const handleMaskonBlur = () => [
    setError(handleErrorCpfCnpf(loginData)),
    setMask(handleMask(loginData)),
    setPasswordState(handleErrorPassword(loginData)),
    setEmailError(handleErroEmail(loginData)),
  ];

  const handleMaskonFocus = () => {
    setMask("");
    setError("");
    setPasswordState("");
  };

  // CONSTANTES QUE RECEBEM FUNÇÕES DE DEFINIÇÃO DE MASCARAS E ERROS
  const CpfCnpj = CPF_CNPJ(handleMaskonBlur, handleMaskonFocus, mask, error);

  const password = PASSWORD();
  const passwordConfirm = PASSWORD_CONFIRM(
    handleMaskonBlur,
    handleMaskonFocus,
    passwordState
  );
  const email = EMAIL();
  const emailConfirm = EMAIL_CONFIRM(
    handleMaskonBlur,
    handleMaskonFocus,
    emailError
  );

  // FORMULÁRIO DO PRIMEIRO ACESSO
  const firstAcessForm = [
    CpfCnpj,
    email,
    emailConfirm,
    password,
    passwordConfirm,
  ];

  // FORMULARIOS DE LOGIN
  const loginCommon = [CpfCnpj, USER(), password];

  const loginAdm = [CpfCnpj, password];

  // FORMULARIOS DE RECUPERAÇÃO DE PASSWORD
  const recoverFiedsAdm = [CpfCnpj, email];
  const recoverFiedsCommon = [CpfCnpj, USER()];

  //FORMULARIO DE INSERÇÃO DE USUARIOS
  const addUserForm = [
    NAME(),
    USER(),
    email,
    emailConfirm,
    password,
    passwordConfirm,
    TELPHONE(),
    CEL_TELPHONE(),
    DEPARTMENT(),
  ];

  //FUNCIONALIDADES A SEREM LIBERADAS

  const { UpdadeRegister, /* SendXML */  RegisterNewUser, ModifyUsers } = GeneralFunctionalities();

  const addFunctionalitiesCheckbox = [
    UpdadeRegister,
    // SendXML,
    RegisterNewUser,
    ModifyUsers,
  ];

  return {
    firstAcessForm: firstAcessForm,
    loginCommon: loginCommon,
    loginAdm: loginAdm,
    recoverFiedsAdm: recoverFiedsAdm,
    recoverFiedsCommon: recoverFiedsCommon,
    addUserForm: addUserForm,
    addFunctionalitiesCheckbox: addFunctionalitiesCheckbox,
  };
};

export default GeneralForms;
