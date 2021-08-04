export const formFields = [
  {
    id: 'usuarios',
    type: 'text',
    label: 'Usuário',
    require: '',
  },
  {
    id: 'email',
    type: 'email',
    label: 'E-mail',
    require: '',
  },
  {
    id: 'CONFIRMEemail',
    type: 'email',
    label: 'Confirme seu E-mail',
    require: '',
  },
  {
    id: 'CPFcnpj',
    type: 'text',
    label: 'CPF/CNPJ',
    require: '',
    pattern: '[0-9]{11}',
    title:
      'Digite um CPF no formato: 00000000000 ou um CNPJ no formato 0000000000000',
    maxLength: '18',
  },
  {
    id: 'senha',
    type: 'password',
    label: 'Senha',
    require: '',
    maxLength: '18',
  },
  {
    id: 'CONFIRMEsenha',
    type: 'password',
    label: 'Confirme sua Senha',
    require: '',
    maxLength: '18',
  },
];
