const baseURL = 'http://localhost:54565/PortalPrestador';

export function LOGIN(user, pass) {
  const login = { CNPJCPF: user, Senha: pass };
  return {
    url: baseURL + '/Login/ ',
    options: {
      method: 'POST',
      body: JSON.stringify(login),
    },
  };
}
