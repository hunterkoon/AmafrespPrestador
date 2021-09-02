const require = 'require';
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
    className: "CPF-FIELD-CLASS",
    value:'',
    require: require,
  };
};

export const EMAIL = (value) => {
  return {
    key: 2,
    id: "email",
    type: "email",
    label: "E-mail",
    require: require,
    value: value && value.email,
    className: "EMAIL-FIELD-CLASS",
    placeholder: "usuario@email.com.br",
    info:"Não necessário para usuários não administradores, favor utilizar e-mail de cadastro principal!."
  };
};

export const EMAIL_CONFIRM = (handleMaskonBlur, handleMaskonFocus, error ) => {
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

export const USER = (value) => {
  return {
    key: 6,
    id: "plogin",
    type: "text",
    value: value && value.plogin,
    require: require,
    label: "Usuário",
    className: "USER-FIELD-CLASS",
    placeholder: "ex : Joao.F",
    info:"Usuário de acesso, cadastrado pelo administrador de usuários. portador do CNPJ / CPF"
  };
};

export const NAME = (value) => {
  return {
    key: 7,
    id: "pnome",
    type: "text",
    value: value && value.pnome,
    require: require,
    label: "Nome Completo",
    className: "NAME-FIELD-CLASS",
  };
};
export const DEPARTMENT = (value) => {
  return {
    key: 8,
    id: "pdepartamento",
    type: "text",
    require: require,
    value: value && value.pdepartamento ,
    label: "Departamento",
    className: "DEPARTMENT-FIELD-CLASS",
    placeholder: "ex : Contabilidade",
  };
};

export const CEL_TELPHONE = (value) => {
  return {
    key: 9,
    id: "pcelfone",
    type: "tel",
    label: "Celular",
    value: value && value.pcelfone ,
    pattern: "[0-9]{2}-[0-9]{9}",
    mask: "99-999999999",
    require: '',
    className: "CELPHONE-FIELD-CLASS",
  };
};

export const TELPHONE = (value) => {
  return {
    key: 10,
    id: "ptelphone",
    type: "tel",
    label: "Telefone Fixo",
    value: value && value.pfone ,
    pattern: "[0-9]{2}-[0-9]{8}",
    mask: "99-99999999",
    require: require,
    className: "TELPHONE-FIELD-CLASS",
  };
};

export const ACTUAL_PASSWORD = () => {
  return {
    key: 11,
    id: "ATUALsenha",
    type: "password",
    label: "Senha Atual",
    require: require,
    className: "PASSWORD-FIELD-CLASS",
  };
};


export const NEW_PASSWORD = (
  handleMaskonBlur,
  handleMaskonFocus,
  error
) => {
  return {
    key: 12,
    id: "NOVAsenha",
    error: error,
    changeBlur: handleMaskonBlur,
    changeFocus: handleMaskonFocus,
    type: "password",
    label: "Nova Senha",
    require: require,
    className: "CONFIRMPASSWORD-FIELD-CLASS",
  
  };
};