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
