import { handlePasswordHash } from '../Shared/Commons/Helpers/HandleInputs';

const regex = /\W/g;

class InputConstants {
  constructor(data) {
    this.NewPassword = handlePasswordHash(data.NOVAsenha);
    this.ActualPassword = handlePasswordHash(data.ATUALsenha);
    this.Password = handlePasswordHash(data.password);
    this.Cpf = data.cpf && data.cpf.replace(regex, '');
    this.CNPJCPF = data.cnpj && data.cnpj.replace(regex, '');
    this.Email = data.email && data.email.toUpperCase();
    this.Department = data.pdepartamento && data.pdepartamento.toUpperCase();
    this.SocialReason = data.razaoSocial && data.razaoSocial.toUpperCase();
    this.FantasyName = data.nomeFantasia && data.nomeFantasia.toUpperCase();
    this.Name = data.pnome && data.pnome.toUpperCase();
    this.Telphone = data.ptelphone;
    this.Celphone = data.pcelfone;
    this.Cep = data.cep && data.cep.replace(regex, '');
    this.Street = data.logradouro;
    this.Neighborhood = data.bairro;
  }
}
export const loginDataSubmit = (data) => {
  const login = new InputConstants(data);
  return {
    CNPJCPF: login.CNPJCPF,
    Senha: login.Password,
  };
};

export const recoverAdmPasswordSubmit = (data) => {
  const recoverAdm = new InputConstants(data);
  return {
    email: recoverAdm.Email,
    CNPJCPF: recoverAdm.Cnpj,
  };
};
export const recoverCommonPasswordSubmit = (data) => {
  const recoverAdm = new InputConstants(data);
  return {
    email: recoverAdm.Email,
    CNPJCPF: recoverAdm.Cpf,
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
    email: firtAcess.Email,
    senha: firtAcess.Password,
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
