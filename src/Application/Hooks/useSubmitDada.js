import { handlePasswordHash } from '../Shared/Commons/Helpers/HandleInputs';

const regex = /\W/g;

class InputConstants {
  constructor(data) {
    this.NewPassword = handlePasswordHash(data.NOVAsenha);
    this.ActualPassword = handlePasswordHash(data.ATUALsenha);
    this.Password = handlePasswordHash(data.password);
    this.Cpf = data.Cpf && data.Cpf.replace(regex, '');
    this.Cnpj = data.CNPJCPF && data.CNPJCPF.replace(regex, '');
    this.Email = data.Email && data.Email.toUpperCase();
    this.Department = data.Departamento && data.Departamento.toUpperCase();
    this.SocialReason = data.RazaoSocial && data.RazaoSocial.toUpperCase();
    this.FantasyName = data.Fantasia && data.Fantasia.toUpperCase();
    this.Name = data.Nome && data.Nome.toUpperCase();
    this.Telphone = data.ptelphone;
    this.Celphone = data.Celular;
    this.Cep = data.cep && data.cep.replace(regex, '');
    this.Street = data.logradouro;
    this.Neighborhood = data.bairro;
  }
}
export const loginDataCNPJSubmit = (data) => {
  const login = new InputConstants(data);
  return {
    CNPJCPF: login.Cnpj,
    Senha: login.Password,
  };
};

export const loginDataCPFSubmit = (data) => {
  const login = new InputConstants(data);
  return {
    CNPJCPF: login.Cpf,
    Senha: login.Password,
  };
};


export const recoverAdmPasswordSubmit = (data) => {
  const recoverAdm = new InputConstants(data);
  return {
    CNPJCPF: recoverAdm.Cnpj,
    Email: recoverAdm.Email,
  };
};
export const recoverCommonPasswordSubmit = (data) => {
  const recoverCommon = new InputConstants(data);
  return {
    CNPJCPF: recoverCommon.Cpf,
    Email: recoverCommon.Email,
  };
};
export const addUserSubmit = (data) => {
  const addUser = new InputConstants(data);
  return {
    nome: addUser.Name,
    CNPJCPF: addUser.Cpf,
    email: addUser.Email,
    senha: addUser.Password,
    telefoneFixo: addUser.Telphone,
    telefoneCelular: addUser.Celphone,
    departamento: addUser.Department,
  };
};
export const firstAcessSubmit = (data) => {
  const firtAcess = new InputConstants(data);
  return {
    CNPJCPF: firtAcess.Cnpj,
    Email: firtAcess.Email,
    Senha: firtAcess.Password,
  };
};
export const adjustsProfileSubmit = (data) => {
  const adjustsUser = new InputConstants(data);
  return {
    nome: adjustsUser.Name,
    CNPJCPF: adjustsUser.Cpf,
    telefoneFixo: adjustsUser.Telphone,
    telefoneCelular: adjustsUser.Celphone,
    email: adjustsUser.Email,
    departamento: adjustsUser.Department,
    senha: adjustsUser.ActualPassword,
    novaSenha: adjustsUser.NewPassword,
  };
};
export const adjustsUserSubmit = (data) => {
  const adjustsUser = new InputConstants(data);
  return {
    nome: adjustsUser.Name,
    CNPJCPF: adjustsUser.Cpf,
    telefoneFixo: adjustsUser.Telphone,
    telefoneCelular: adjustsUser.Celphone,
    email: adjustsUser.Email,
    departamento: adjustsUser.Department,
    novaSenha: adjustsUser.NewPassword,
  };
};
export const deleteUserSubmit = (data) => {
  const adjustsUser = new InputConstants(data);
  return {
    nome: adjustsUser.Name,
    CNPJCPF: adjustsUser.Cpf,
  };
};

export const upRegRegistrationSubmit = (data) => {
  const upRegAddress = new InputConstants(data);
  return {
    CNPJCPF: upRegAddress.Cnpj,
    razaoSocial: upRegAddress.SocialReason,
    fantasia: upRegAddress.Neighborhood,
  };
};
