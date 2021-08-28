const require = false;

export const CPF_CNPJ = (handleMaskonBlur, handleMaskonFocus, mask, error) => {
  return {
    error: error,
    key: 1,
    id: "CNPJCPF",
    type: "text",
    label: "CNPJ / CPF",
    mask: mask,
    changeBlur: handleMaskonBlur,
    changeFocus: handleMaskonFocus,
    require: require,
    className: "CPF-FIELD-CLASS",
  };
};

export const EMAIL = () => {
  return {
    key: 2,
    id: "email",
    type: "email",
    label: "E-mail",
    require: require,
    className: "EMAIL-FIELD-CLASS",
    placeholder: "usuario@email.com.br",
  };
};

export const EMAIL_CONFIRM = (handleMaskonBlur, handleMaskonFocus, error) => {
  return {
    key: 3,
    error: error,
    changeBlur: handleMaskonBlur,
    changeFocus: handleMaskonFocus,
    id: "CONFIRMEemail",
    type: "email",
    label: "Confirme seu E-mail",
    require: require,
    className: "CONFIRMEMAIL-FIELD-CLASS",
    placeholder: "usuario@email.com.br",
  };
};

export const PASSWORD = () => {
  return {
    key: 4,
    id: "senha",
    type: "password",
    label: "Senha",
    require: require,
    className: "PASSWORD-FIELD-CLASS",
  };
};

export const PASSWORD_CONFIRM = (
  handleMaskonBlur,
  handleMaskonFocus,
  error
) => {
  return {
    key: 5,
    id: "CONFIRMEsenha",
    error: error,
    changeBlur: handleMaskonBlur,
    changeFocus: handleMaskonFocus,
    type: "password",
    label: "Confirme sua Senha",
    require: require,
    className: "CONFIRMPASSWORD-FIELD-CLASS",
  };
};

export const USER = () => {
  return {
    key: 6,
    id: "plogin",
    type: "text",
    require: require,
    label: "Usuário",
    className: "USER-FIELD-CLASS",
  };
};

export const NAME = () => {
  return {
    key: 7,
    id: "pnome",
    type: "text",
    require: require,
    label: "Nome Completo",
    mask: "",
    className: "NAME-FIELD-CLASS",
  };
};
export const DEPARTMENT = () => {
  return {
    key: 8,
    id: "pdepartamento",
    type: "text",
    require: require,
    label: "Departamento",
    className: "DEPARTMENT-FIELD-CLASS",
    placeholder: "ex : Contabilidade",
  };
};

export const CEL_TELPHONE = () => {
  return {
    key: 9,
    id: "pcelfone",
    type: "tel",
    label: "Celular",
    pattern: "[0-9]{2}-[0-9]{9}",
    mask: "99-999999999",
    require: require,
    className: "CELPHONE-FIELD-CLASS",
  };
};

export const TELPHONE = () => {
  return {
    key: 10,
    id: "pfone",
    type: "tel",
    label: "Telefone Fixo",
    pattern: "[0-9]{2}-[0-9]{8}",
    mask: "99-99999999",
    require: require,
    className: "TELPHONE-FIELD-CLASS",
  };
};


