import { handlePasswordHash } from '../Shared/Commons/Helpers/HandleInputs';

const regex = /\W/g;

class InputConstants {
  constructor(data) {
    this.NewPassword = data.NOVAsenha && handlePasswordHash(data.NOVAsenha);
    this.ActualPassword = data.ATUALsenha && handlePasswordHash(data.ATUALsenha);
    this.Password = data.password && handlePasswordHash(data.password);
    this.Cpf = data.cpf && data.cpf.replace(regex, '');
    this.Cnpj = data.CNPJCPF && data.CNPJCPF.replace(regex, '');
    this.Email = data.email;
    this.Department = data.setor && data.setor.toUpperCase();
    this.SocialReason = data.RazaoSocial && data.RazaoSocial.toUpperCase();
    this.FantasyName = data.Fantasia && data.Fantasia.toUpperCase();
    this.Name = data.nome && data.nome.toUpperCase();
    this.Celphone = data.celular && data.celular.replace(regex, '');
    this.Cep = data.cep && data.cep.replace(regex, '');
    this.Street = data.logradouro;
    this.Neighborhood = data.bairro;
    // this.IdEmploy = data.idPrestador;
    // this.IdUser = data.idUsuario;
    // this.Status = data.ativo;

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
    Nome: addUser.Name,
    Cpf: addUser.Cpf,
    Email: addUser.Email,
    Senha: addUser.Password,
    Celular: addUser.Celphone,
    Departamento: addUser.Department,
  };
};
export const firstAcessSubmit = (data) => {
  const firtAcess = new InputConstants(data);
  return {
    CNPJCPF: firtAcess.Cnpj,
    Email: firtAcess.Email
  };
};
export const adjustsProfileSubmit = (data) => {
  const adjustsUser = new InputConstants(data);
  return {
    Nome: adjustsUser.Name,
    Cpf: adjustsUser.Cpf,
    Celular: adjustsUser.Celphone,
    Email: adjustsUser.Email,
    Departamento: adjustsUser.Department,
    Senha: adjustsUser.ActualPassword,
    SenhaNova: adjustsUser.NewPassword,
  };
};
export const adjustsUserSubmit = (data) => {
  const adjustsUser = new InputConstants(data);
  return {
    Nome: adjustsUser.Name,
    Cpf: adjustsUser.Cpf,
    Celular: adjustsUser.Celphone,
    Email: adjustsUser.Email,
    Departamento: adjustsUser.Department,
    SenhaNova: adjustsUser.NewPassword,
    Senha: adjustsUser.ActualPassword,

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
