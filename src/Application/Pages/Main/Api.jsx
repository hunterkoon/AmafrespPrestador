const baseURL = 'http://localhost:54565/PortalPrestador';

export function LOGIN(user, pass) {
  const data = { CNPJCPF: user, Senha: pass };
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
export function CHANGE_PROFILE(obj, id, cnpj, senhaliberada) {
  const data = {
    CNPJCPF: cnpj,
    SenhaNova: obj.SenhaNova,
    Senha: obj.Senha,
    Nome: obj.Nome,
    Departamento: obj.Departamento,
    Cpf: obj.Cpf,
    Email: obj.Email,
    Celular: obj.Celular,
    IdUsuario: id,
    SenhaLiberada: senhaliberada
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
