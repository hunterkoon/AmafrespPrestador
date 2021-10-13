import React from "react";
import GeneralFunctionalities from "./GeneralFunctionalities";
import {
  EMAIL,
  EMAIL_CONFIRM,
  PASSWORD,
  PASSWORD_CONFIRM,
  NAME,
  CEL_TELPHONE,
  TELPHONE,
  DEPARTMENT,
  ACTUAL_PASSWORD,
  NEW_PASSWORD,
  SOCIAL,
  FANTASY_NAME,
  CPF,
  CNPJ,
  // CEP,
  // STREET,
  // NEIGHBORHOOD,
  // CITY,
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
const { UpdadeRegister, RegisterNewUser, ModifyUsers, PriceTable, addressTypeMain, addressTypePostal } = GeneralFunctionalities();

const GeneralForms = (loginData) => {
  //  const { address  } = React.useContext(GlobalContext);
  const [CNPJmask, setCNPJMask] = React.useState("");
  const [CPFmask, setCPFMask] = React.useState("");
  const [CPFError, setCPFError] = React.useState("");
  const [CNPJError, setCNPJError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [newPasswordError, setNewpasswordError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

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
  const atualPassword = ACTUAL_PASSWORD();
  const email = EMAIL();
  const name = NAME();
  const telphone = TELPHONE();
  const celphone = CEL_TELPHONE();
  const department = DEPARTMENT();
  const socialReason = SOCIAL();
  const fantasy = FANTASY_NAME();
  //  const cep = CEP();
  //  const logradouro = STREET(address );
  //  const bairro = NEIGHBORHOOD(address);
  //  const location = CITY(address);

  // FORMULÁRIO DO PRIMEIRO ACESSO
  const firstAcessForm = [cnpj, email, emailConfirm /*, password, passwordConfirm */];
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
    department,
    celphone,
    password,
    passwordConfirm,
    email,
    emailConfirm,
  ];

  //FORMULARIO DE ALTERAÇÃO DE PERFIL
  const adjustsUserForm = [
    name,
    department,
    cpf,
    celphone,
    atualPassword,
    newPassword,
    email,
    emailConfirm,
  ];

  // FORMULARIO ALTERAÇÃO DE USUARIOS
  const adjustsManangerUser = [
    name,
    cpf,
    celphone,
    newPassword,
    email,
    department,
  ];

  //FUNCIONALIDADES A SEREM LIBERADAS

  const addFunctionalitiesCheckbox = [
    UpdadeRegister,
    RegisterNewUser,
    ModifyUsers,
    PriceTable,
  ];

  const upRegFormRegisterData = [cnpj, socialReason, fantasy];
  const upRegCBXAddress = [addressTypeMain, addressTypePostal];

  return {
    adjustsUserForm: adjustsUserForm,
    firstAcessForm: firstAcessForm,
    loginCommon: loginCommon,
    loginAdm: loginAdm,
    recoverFiedsAdm: recoverFiedsAdm,
    recoverFiedsCommon: recoverFiedsCommon,
    addUserForm: addUserForm,
    adjustsManangerUser: adjustsManangerUser,
    addFunctionalitiesCheckbox: addFunctionalitiesCheckbox,
    upRegFormRegisterData: upRegFormRegisterData,
    upRegCBXAddress: upRegCBXAddress,
  };
};

export default GeneralForms;
