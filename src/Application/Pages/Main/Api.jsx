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
    url: baseURL + '/GetDadosByToken/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function RECOVER_PASSWORDD(cnpjcpf, email) {
  const data = { CNPJCPF: cnpjcpf, Email: email };
  return {
    url: baseURL + '/GerarNovaSenha/ ',
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
export function FREE_ACESS(id) {
  const data = { IdUsuario: id };
  return {
    url: baseURL + '/ConfirmaSenha/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
export function CHANGE_PROFILE(obj, id, cnpj) {
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
  };
  return {
    url: baseURL + '/AlterarDadosLogado/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(data),
    },
  };
}
