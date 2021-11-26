const baseURL = 'http://afrespdesenv:6080/AfrApi/PortalPrestador/';

export function LOGIN(obj) {
  const data = obj;
  return {
    url: baseURL + '/Login/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function AUTO_LOGIN(cnpjcpf, token) {
  const data = { CNPJCPF: cnpjcpf, Token: token };
  return {
    url: baseURL + '/Login/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function RECOVER_PASSWORDD(cnpjcpf, email) {
  const data = { CNPJCPF: cnpjcpf, Email: email };
  return {
    url: baseURL + '/RecuperarSenha/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function FIRST_ACESS(cnpjcpf, email) {
  const data = { CNPJCPF: cnpjcpf, Email: email };
  return {
    url: baseURL + '/PrimeiroAcesso/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function FREE_ACESS(cnpjcpf) {
  const data = { CNPJCPF: cnpjcpf };
  return {
    url: baseURL + '/RecuperarSenha/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function CHANGE_PROFILE(obj, cnpj, senhaliberada) {
  const data = {
    IdPrestador: obj.IdPrestador,
    IdUsuario: obj.IdUsuario,
    SenhaNova: obj.SenhaNova,
    Senha: obj.Senha,
    Nome: obj.Nome,
    Departamento: obj.Departamento,
    Cpf: obj.Cpf,
    Email: obj.Email,
    Celular: obj.Celular,
    SenhaLiberada: senhaliberada,
    CNPJCPF: cnpj,
    Funcionalidades: obj.Funcionalidades
  };
  return {
    url: baseURL + '/AlterarDadosLogado/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function GET_USER(id) {
  const data = { IdPrestador: id };
  return {
    url: baseURL + '/GetUsuariosOfPrestadorByID/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function ADD_USER(obj, idprestador, senhaliberada) {
  const data = {
    Nome: obj.Nome,
    Cpf: obj.Cpf,
    Email: obj.Email,
    Celular: obj.Celular,
    Departamento: obj.Departamento,
    Senha: obj.Senha,
    Funcionalidades: obj.Funcionalidades,
    IdPrestador: idprestador,
    SenhaLiberada: senhaliberada
  };
  return {
    url: baseURL + '/InserirUsuario/',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function DEACTIVE_USER(obj) {
  const data = obj;
  return {
    url: baseURL + '/AtivarDesativarUsuario/',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
