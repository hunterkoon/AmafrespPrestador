import { handlePasswordHash } from "../Shared/Commons/Helpers/HandleInputs";

const handleReplaced = (data) => {
  const regex = /\W/g;
  const cpf = data.cpf && data.cpf.replace(regex, "");
  const cnpj = data.cnpj && data.cnpj.replace(regex, "");
  const email = data.email && data.email.toUpperCase();

  return {
    email:email,
    cpf: cpf,
    cnpj: cnpj,
    senha: handlePasswordHash(data),
  };
};
export const loginCommonSubmit = (data) => {
  const { cpf, senha } = handleReplaced(data);
  localStorage.setItem("cpf", cpf);
  localStorage.setItem("token", senha);
  return {
    cpf: cpf,
    senha: senha,
  };
};
export const loginAdmSubmit = (data) => {
  const { cnpj, senha } = handleReplaced(data);
  localStorage.setItem("cnpj", cnpj);
  localStorage.setItem("token", senha);
  return {
    cnpj: cnpj,
    senha: senha,
  };
};

export const recoverCommonPassword = (data) =>{
    const { email, cpf } = handleReplaced(data);
    return {
        email: email,
        cpf: cpf,
      };

}
export const recoverAdmPassword = (data) =>{
    const { email, cnpj } = handleReplaced(data);
    return {
        email: email,
        cnpj: cnpj,
      };

}