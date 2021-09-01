import React from "react";
import GeneralFunctionalities from "./GeneralFunctionalities";
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
  NEW_PASSWORD,
  NEW_PASSWORD_CONFIRM,
} from "./GeneralFields";
import {
  handleMask,
  handleErrorCpfCnpf,
  handleErrorPassword,
  handleErroEmail,
} from "../Commons/Helpers/HandleInputs";

const GeneralForms = (loginData) => {
  const [mask, setMask] = React.useState("");
  const [cpfcnpjError, setCpfcnpjError] = React.useState("");
  const [passwordState, setPasswordState] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const handleMaskonBlur = () => ([
    setCpfcnpjError(handleErrorCpfCnpf(loginData)),
    setMask(handleMask(loginData)),
    setPasswordState(handleErrorPassword(loginData)),
    setEmailError(handleErroEmail(loginData)),
  ]);
  const handleMaskonFocus = () => {
    setMask("");
    setCpfcnpjError("");  
    setPasswordState("");
  };

  // CONSTANTES QUE RECEBEM FUNÇÕES DE DEFINIÇÃO DE MASCARAS E ERROS
  const CpfCnpj = CPF_CNPJ(handleMaskonBlur, handleMaskonFocus, mask, cpfcnpjError);
  const passwordConfirm = PASSWORD_CONFIRM(handleMaskonBlur, handleMaskonFocus, passwordState);
  const emailConfirm = EMAIL_CONFIRM(handleMaskonBlur ,handleMaskonFocus, emailError);
  const newPasswordConfirm = NEW_PASSWORD_CONFIRM(handleMaskonBlur, handleMaskonFocus, passwordState);
  const password = PASSWORD();
  const newPassword = NEW_PASSWORD();
  const email = EMAIL();
  const name = NAME();
  const user = USER();
  const telphone = TELPHONE()
  const celphone = CEL_TELPHONE()
  const department = DEPARTMENT()

  // FORMULÁRIO DO PRIMEIRO ACESSO
  const firstAcessForm = [
    CpfCnpj,
    email,
    emailConfirm,
    password,
    passwordConfirm,
  ];
  // FORMULARIOS DE LOGIN
  const loginCommon = [CpfCnpj, user, password];
  const loginAdm = [CpfCnpj, password];

  // FORMULARIOS DE RECUPERAÇÃO DE PASSWORD
  const recoverFiedsAdm = [CpfCnpj, email];
  const recoverFiedsCommon = [CpfCnpj, user];

  //FORMULARIO DE INSERÇÃO DE USUARIOS
  const addUserForm = [
    name,
    user,
    email,
    emailConfirm,
    password,
    passwordConfirm,
    telphone,
    celphone,
    department,
  ];

    //FORMULARIO DE INSERÇÃO DE USUARIOS
    const adjustsUserForm = [
      name,
      user,
      email,
      emailConfirm,
      telphone,
      celphone,
      department,
      newPassword,
      newPasswordConfirm,
    ];
  //FUNCIONALIDADES A SEREM LIBERADAS

  const { UpdadeRegister,RegisterNewUser, ModifyUsers } =
    GeneralFunctionalities();
  const addFunctionalitiesCheckbox = [
    UpdadeRegister,
    RegisterNewUser,
    ModifyUsers,
  ];

  return {
    adjustsUserForm: adjustsUserForm,
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
