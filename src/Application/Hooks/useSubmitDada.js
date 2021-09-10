import { handlePasswordHash } from "../Shared/Commons/Helpers/HandleInputs";

const regex = /\W/g;

class InputConstants {
  constructor(data) {
    this.NewPassword = handlePasswordHash(data.NOVAsenha);
    this.ActualPassword = handlePasswordHash(data.ATUALsenha);
    this.Password = handlePasswordHash(data.password);
    this.Cpf = data.cpf && data.cpf.replace(regex, "");
    this.Cnpj = data.cnpj && data.cnpj.replace(regex, "");
    this.Email = data.email && data.email.toUpperCase();
    this.Department = data.pdepartamento && data.pdepartamento.toUpperCase();
    this.SocialReason = data.razaoSocial && data.razaoSocial.toUpperCase();
    this.FantasyName = data.nomeFantasia && data.nomeFantasia.toUpperCase();
    this.Name = data.pnome && data.pnome.toUpperCase();
    this.Telphone = data.ptelphone;
    this.Celphone = data.pcelfone;
    this.Cep = data.cep && data.cep.replace(regex,"");
    this.Street = data.logradouro
    this.Neighborhood = data.bairro
  }
}
export const loginCommonDataSubmit = (data) => {
  const loginCommon = new InputConstants(data);
  return {
    cpf: loginCommon.Cpf,
    senha: loginCommon.Password,
  };
};
export const loginAdmDataSubmit = (data) => {
  const loginAdm = new InputConstants(data);
  localStorage.setItem('token', loginAdm.Password)
  return {
    cnpj: loginAdm.Cnpj,
    senha: loginAdm.Password,
  };
};

export const recoverAdmPasswordSubmit = (data) => {
  const recoverAdm = new InputConstants(data);
  return {
    email: recoverAdm.Email,
    cnpj: recoverAdm.Cnpj,
  };
};
export const recoverCommonPasswordSubmit = (data) => {
  const recoverAdm = new InputConstants(data);
  return {
    email: recoverAdm.Email,
    cpf: recoverAdm.Cpf,
  };
};
export const addUserSubmit = (data) => {
  const addUser = new InputConstants(data);
  return {
    nome: addUser.Name,
    cpf: addUser.Cpf,
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
    cnpj: firtAcess.Cnpj,
    email: firtAcess.Email,
    senha: firtAcess.Password,
  };
};
export const adjustsUserSubmit = (data) => {
    const adjustsUser = new InputConstants(data);
    return {
      nome: adjustsUser.Name,
      cpf: adjustsUser.Cpf,
      telefoneFixo: adjustsUser.Telphone,
      telefoneCelular: adjustsUser.Celphone,
      email: adjustsUser.Email,
      departamento: adjustsUser.Department,
      senha: adjustsUser.ActualPassword,
      novaSenha: adjustsUser.NewPassword,
    };
  };

export const upRegAddressSubmit = (data) => {
    const upRegAddress = new InputConstants(data);
    return {
      cep: upRegAddress.Cep,
      logradouro : upRegAddress.Street,
      bairro : upRegAddress.Neighborhood,
    };
  };

