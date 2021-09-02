export const handleMask = (loginData) => {
  return loginData.CNPJCPF && loginData.CNPJCPF
    ? function mask() {
        const replaced = loginData.CNPJCPF.replace(/\W/g, "");
        if (replaced.length <= 11) {
          return "999.999.999-99";
        }
        if (replaced.length === 14) {
          return "99.999.999/9999-99";
        }
        if (replaced.length > 18) {
          return "";
        } else return "";
      }
    : null;
};
export const handleErrorCpfCnpf = (loginData) => {
  return loginData.CNPJCPF
    ? function error() {
        const replaced = loginData.CNPJCPF.replace(/\W/g, "");
        if (replaced.length < 11 || replaced.length > 14) {
          return "Digite um CPF ou CNPJ válido ex: 999.999.999-99 ou 99.999.999/0001-99";
        }
        if (replaced.length > 11 && replaced.length < 14) {
          return "Digite um CNPJ válido ex: 99.999.999/0001-99";
        }
      }
    : "";
};
export const handleErrorPassword = (loginData) => {
  return loginData.senha
    ? function passwordCheck() {
        const pass = loginData.senha;
        const confirmPass = loginData.CONFIRMEsenha;
        const regex = /\W/g;
        if (pass === "") {
          return "";
        }
        if (!regex.test(pass) || pass.length < 8) {
          return " A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um caracter especial : @#$&";
        }
        if (pass !== confirmPass) {
          return "Senhas não conferem, digite a mesma senha em ambos os campos!";
        }
      }
    : "";
};
export const handleErrorNewPassword = (loginData) => {
  return loginData.NOVAsenha
    ? function passwordCheck() {
        const pass = loginData.NOVAsenha;
        const regex = /\W/g;
        if (pass === "") {
          return "";
        }
        if (!regex.test(pass) || pass.length < 8) {
          return " A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um caracter especial : @#$&";
        }
      }
    : "";
};
export const handleErroEmail = (loginData) => {
  return loginData.email && loginData.CONFIRMEemail
    ? function emailCheck() {
        const email = loginData.email;
        const confirmEmail = loginData.CONFIRMEemail;
        const regex = /\W/g;

        if (email === "" && confirmEmail === "") {
          return "";
        }
        if (email !== confirmEmail) {
          return "Emails não conferem, verifique a digitação!.";
        }
        if (!regex.test(confirmEmail)) {
          return "Por favor digite um e-mail válido!.";
        }
      }
    : "";
};

export const handleUpperCase = (arr) => {
if(arr.pnome !== undefined){

  let strings = [];
  let passwords = [];
  
  Object.entries(arr).map((item) => {
    if (
      item[0] !== "senha" &&
      item[0] !== "CONFIRMEsenha" &&
      item[0] !== "plogin"
    ) {
      return strings.push([item[0], item[1].toUpperCase()]);
    } else return passwords.push([item[0], item[1]]);
  });
  
  strings = Object.fromEntries(strings);
  passwords = Object.fromEntries(passwords);
  return Object.assign(strings, passwords);
} else return ''
};
