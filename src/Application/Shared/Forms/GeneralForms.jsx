import React from "react";
import GeneralFunctionalities from "./GeneralFunctionalities";
import {
  EMAIL,
  EMAIL_CONFIRM,
  PASSWORD,
  PASSWORD_CONFIRM,
  // USER,
  NAME,
  CEL_TELPHONE,
  TELPHONE,
  DEPARTMENT,
  ACTUAL_PASSWORD,
  NEW_PASSWORD,
  SOCIAL,
  FANTASY_NAME,
  CEP,
  CPF,
  CNPJ,
} from "./GeneralFields";
import {
  handleMaskCPF,
  handleErrorPassword,
  handleErroEmail,
  handleErrorNewPassword,
  handleErrorCPF,
  handleErrorCNPJ,
  handleMaskCNPJ,
} from "../Commons/Helpers/HandleInputs";

const GeneralForms = (loginData) => {
  const [CNPJmask, setCNPJMask] = React.useState("");
  const [CPFmask, setCPFMask] = React.useState("");
  const [CPFError, setCPFError] = React.useState("");
  const [CNPJError, setCNPJError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [newPasswordError, setNewpasswordError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  // const [cepReplace, setCepReplace] = React.useState("");

  React.useEffect(() => {
    const handleFunction = (setstate, fun) => {
      return loginData ? setstate(fun(loginData)) : null;
    };

    handleFunction(setCNPJMask, handleMaskCNPJ);
    handleFunction(setCPFMask, handleMaskCPF);
    handleFunction(setPasswordError, handleErrorPassword);
    handleFunction(setCNPJError, handleErrorCNPJ);
    handleFunction(setCPFError, handleErrorCPF);
    handleFunction(setEmailError, handleErroEmail);
    handleFunction(setNewpasswordError, handleErrorNewPassword);

    // handleFunction(setCepReplace, handleCepReplaced);
  }, [loginData]);

  // CONSTANTES QUE RECEBEM FUNÇÕES DE DEFINIÇÃO DE MASCARAS E ERROS

  // const CpfCnpj = CPF_CNPJ(mask, cpfcnpjError);
  const cnpj = CNPJ(CNPJmask, CNPJError);
  const cpf = CPF(CPFmask, CPFError);
  const emailConfirm = EMAIL_CONFIRM(emailError);
  const password = PASSWORD();
  const passwordConfirm = PASSWORD_CONFIRM(passwordError);

  const newPassword = NEW_PASSWORD(newPasswordError);
  const ActualPassword = ACTUAL_PASSWORD();
  const email = EMAIL();
  const name = NAME();
  // const user = USER();
  const telphone = TELPHONE();
  const celphone = CEL_TELPHONE();
  const department = DEPARTMENT();
  const socialReason = SOCIAL();
  const fantasyName = FANTASY_NAME();
  const cep = CEP();

  // FORMULÁRIO DO PRIMEIRO ACESSO
  const firstAcessForm = [cnpj, email, emailConfirm, password, passwordConfirm];
  // FORMULARIOS DE LOGIN
  const loginCommon = [cpf, password];
  const loginAdm = [cnpj, password];

  // FORMULARIOS DE RECUPERAÇÃO DE PASSWORD
  const recoverFiedsAdm = [cnpj, email];
  const recoverFiedsCommon = [cpf, email];

  //FORMULARIO DE INSERÇÃO DE USUARIOS
  const addUserForm = [
    name,
    cpf,
    email,
    emailConfirm,
    password,
    passwordConfirm,
    telphone,
    celphone,
    department,
  ];

  //FORMULARIO DE ALTERAÇÃO DE PERFIL
  const adjustsUserForm = [
    name,
    cpf,
    email,
    emailConfirm,
    telphone,
    celphone,
    department,
    ActualPassword,
    newPassword,
  ];

  //FUNCIONALIDADES A SEREM LIBERADAS

  const {
    UpdadeRegister,
    RegisterNewUser,
    ModifyUsers,
    addressTypeMain,
    addressTypePostal,
  } = GeneralFunctionalities();

  const addFunctionalitiesCheckbox = [
    UpdadeRegister,
    RegisterNewUser,
    ModifyUsers,
  ];

  const updateRegisterForm = [socialReason, fantasyName, cep];
  const updateRegisterCheckbox = [addressTypeMain, addressTypePostal];

  return {
    adjustsUserForm: adjustsUserForm,
    firstAcessForm: firstAcessForm,
    loginCommon: loginCommon,
    loginAdm: loginAdm,
    recoverFiedsAdm: recoverFiedsAdm,
    recoverFiedsCommon: recoverFiedsCommon,
    addUserForm: addUserForm,
    addFunctionalitiesCheckbox: addFunctionalitiesCheckbox,
    updateRegisterForm: updateRegisterForm,
    updateRegisterCheckbox: updateRegisterCheckbox,
  };
};

export default GeneralForms;
