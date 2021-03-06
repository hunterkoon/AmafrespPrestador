const require = true;

export const CPF_CNPJ = (mask, error, funBlu, funFoc) => {
  return {
    changeFocus: funFoc,
    changeBlur: funBlu,
    error: error,
    key: 1,
    id: 'CNPJCPF',
    type: 'text',
    label: 'CPF/CNPJ',
    mask: mask,
    className: 'CPF-FIELD-CLASS',
    value: '',
    require: require,
  };
};

export const EMAIL = () => {
  return {
    key: 2,
    id: 'email',
    type: 'email',
    label: 'E-mail',
    require: require,
    className: 'EMAIL-FIELD-CLASS',
    placeholder: 'usuario@email.com.br',
    info:
      'Não necessário para usuários não administradores, favor utilizar e-mail de cadastro principal!.',
  };
};

export const EMAIL_CONFIRM = (error, funBlu, funFoc) => {
  return {
    key: 3,
    error: error,
    changeBlur: funBlu,
    changeFocus: funFoc,
    id: 'CONFIRMEemail',
    type: 'email',
    label: 'Confirme seu E-mail',
    require: require,
    className: 'CONFIRMEMAIL-FIELD-CLASS',
    placeholder: 'usuario@email.com.br',
  };
};

export const PASSWORD = () => {
  return {
    key: 4,
    id: 'password',
    type: 'password',
    label: 'Senha',
    require: require,
    className: 'PASSWORD-FIELD-CLASS',
  };
};

export const PASSWORD_CONFIRM = (error) => {
  return {
    key: 5,
    error: error,
    id: 'CONFIRMEsenha',
    type: 'password',
    label: 'Confirme sua Senha',
    require: require,
    className: 'CONFIRMPASSWORD-FIELD-CLASS',
  };
};

export const USER = (value) => {
  return {
    key: 6,
    id: 'plogin',
    type: 'text',
    value: value && value.plogin,
    require: require,
    label: 'Usuário',
    className: 'USER-FIELD-CLASS',
    placeholder: 'ex : Joao.F',
    info:
      'Usuário de acesso, cadastrado pelo administrador de usuários. portador do CNPJ / CPF',
  };
};

export const NAME = () => {
  return {
    key: 7,
    id: 'nome',
    type: 'text',
    require: require,
    label: 'Nome Completo',
    className: 'NAME-FIELD-CLASS',
  };
};
export const DEPARTMENT = () => {
  return {
    key: 8,
    id: 'setor',
    type: 'text',
    require: require,
    label: 'Departamento',
    className: 'DEPARTMENT-FIELD-CLASS',
    placeholder: 'ex : Contabilidade',
  };
};

export const CEL_TELPHONE = () => {
  return {
    key: 9,
    id: 'celular',
    type: 'text',
    label: 'Celular',
    mask: '(99) 9 9999-9999',
    require: '',
    className: 'CELPHONE-FIELD-CLASS',
  };
};

export const ACTUAL_PASSWORD = (error, funBlu, funFoc) => {
  return {
    key: 11,
    error: error,
    changeBlur: funBlu,
    changeFocus: funFoc,
    id: 'ATUALsenha',
    type: 'password',
    label: 'Senha Atual',
    require: false,
    className: 'PASSWORD-FIELD-CLASS',
  };
};

export const NEW_PASSWORD = (error, funBlu, funFoc) => {
  return {
    key: 12,
    id: 'NOVAsenha',
    error: error,
    changeBlur: funBlu,
    changeFocus: funFoc,
    type: 'password',
    label: 'Nova Senha',
    require: false,
    className: 'CONFIRMPASSWORD-FIELD-CLASS',
  };
};

export const SOCIAL = (value) => {
  return {
    key: 13,
    id: 'RazaoSocial',
    type: 'text',
    value: value && value.razaoSOCIAL,
    label: 'Razão Social',
    className: '',
    placeholder: 'ex :  Fernando Labets Medicina LTDA.',
    info: '',
    require: require,
  };
};
export const FANTASY_NAME = (value) => {
  return {
    key: 14,
    id: 'Fantasia',
    type: 'text',
    value: value && value.nomeFantasia,
    label: 'Nome Fantasia',
    className: '',
    placeholder: 'ex: Clinica Labets',
    info: '',
    require: require,
  };
};
export const CEP = () => {
  return {
    key: 15,
    id: 'cep',
    type: 'text',
    label: 'CEP',
    className: '',
    placeholder: '0123-000',
    info: 'Digite o CEP para preencher os demais campos!.',
    mask: '99999-999',
    value: '',
    require: require,
  };
};

export const CPF = (mask, error, funBlu, funFoc) => {
  return {
    changeFocus: funFoc,
    changeBlur: funBlu,
    error: error,
    key: 16,
    id: 'cpf',
    type: 'text',
    label: 'CPF',
    mask: mask,
    className: 'CPF-FIELD-CLASS',
    require: require,
  };
};
export const CNPJ = (mask, error, funBlu, funFoc) => {
  return {
    changeFocus: funFoc,
    changeBlur: funBlu,
    error: error,
    key: 17,
    id: 'CNPJCPF',
    type: 'text',
    label: 'CNPJ',
    mask: mask,
    className: 'CNPJ-FIELD-CLASS',
    require: require,

  };
};
export const STREET = (value, error) => {
  return {
    error: error,
    key: 18,
    id: 'logradouro',
    type: 'text',
    label: 'Logradouro',
    className: 'STREET-FIELD-CLASS',
    value: value && value.logradouro,
    require: require,
  };
};
export const NEIGHBORHOOD = (value, error) => {
  return {
    error: error,
    key: 19,
    id: 'bairro',
    type: 'text',
    label: 'Bairro',
    className: 'STREET-FIELD-CLASS',
    value: value && value.bairro,
    require: require,
  };
};
export const CITY = (value, error) => {
  return {
    error: error,
    key: 20,
    id: 'localidade',
    type: 'text',
    label: 'Localidade',
    className: 'STREET-FIELD-CLASS',
    value: value && value.cidade,
    require: require,
  };
};
