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
  ACTUAL_PASSWORD,
  NEW_PASSWORD,
  SOCIAL,
  FANTASY_NAME,
  CEP,
} from "./GeneralFields";
import {
  handleMask,
  handleErrorCpfCnpf,
  handleErrorPassword,
  handleErroEmail,
  handleErrorNewPassword,
  // handleCepReplaced,
} from "../Commons/Helpers/HandleInputs";

const GeneralForms = (loginData) => {
  const [mask, setMask] = React.useState("");
  const [cpfcnpjError, setCpfcnpjError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [newPasswordError, setNewpasswordError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const[cepReplace, setCepReplace ] = React.useState("");
  
  React.useEffect(() => {
    const handleFunction = (setstate, fun) => {
      return loginData ? setstate(fun(loginData)): null
    };

    handleFunction(setMask, handleMask);
    handleFunction(setPasswordError, handleErrorPassword);
    handleFunction(setCpfcnpjError, handleErrorCpfCnpf);
    handleFunction(setEmailError, handleErroEmail);
    handleFunction(setNewpasswordError, handleErrorNewPassword);
    // handleFunction(setCepReplace, handleCepReplaced);
  }, [loginData]);

  // CONSTANTES QUE RECEBEM FUNÇÕES DE DEFINIÇÃO DE MASCARAS E ERROS

  const CpfCnpj = CPF_CNPJ(mask, cpfcnpjError);
  const passwordConfirm = PASSWORD_CONFIRM(passwordError);
  const emailConfirm = EMAIL_CONFIRM(emailError);
  const newPassword = NEW_PASSWORD(newPasswordError);

  const ActualPassword = ACTUAL_PASSWORD();
  const password = PASSWORD();
  const email = EMAIL();
  const name = NAME();
  const user = USER();
  const telphone = TELPHONE();
  const celphone = CEL_TELPHONE();
  const department = DEPARTMENT();
  const socialReason = SOCIAL();
  const fantasyName = FANTASY_NAME();
  const cep = CEP();

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

  const updateRegisterForm = [
    socialReason,
    fantasyName,
    cep,
  ]
  const updateRegisterCheckbox = [
    addressTypeMain,
    addressTypePostal,
  ]

  return {
    adjustsUserForm: adjustsUserForm,
    firstAcessForm: firstAcessForm,
    loginCommon: loginCommon,
    loginAdm: loginAdm,
    recoverFiedsAdm: recoverFiedsAdm,
    recoverFiedsCommon: recoverFiedsCommon,
    addUserForm: addUserForm,
    addFunctionalitiesCheckbox: addFunctionalitiesCheckbox,
    updateRegisterForm:updateRegisterForm,
    updateRegisterCheckbox : updateRegisterCheckbox,
  };
};

export default GeneralForms;
