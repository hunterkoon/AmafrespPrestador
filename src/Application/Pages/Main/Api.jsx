const baseURL = 'http://192.168.0.106:3036';

// export function GETDADOS() {
//   return {
//     url: baseURL,
//     options: { method: 'GET' },
//   };
// }

export function GETDADOS(user, pass, email) {
  // const login = { USER: user, PASSWORD: pass, EMAIL: email };
  return {
    url: baseURL + '/prestador/',
    options: {
      method: 'GET',
      // body: JSON.stringify(login),
    },
  };
}
