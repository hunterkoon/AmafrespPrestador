import MD5 from "crypto-js/md5";

export const handleMaskCPF = (loginData) => {
  return loginData.Cpf && loginData.Cpf
    ? function mask() {
      const replaced = loginData.Cpf.replace(/\W/g, "");
      if (replaced.length <= 11) {
        return "999.999.999-99";
      } else return "";
    }
    : "";
};
export const handleMaskCNPJ = (loginData) => {
  return loginData.CNPJCPF && loginData.CNPJCPF
    ? function mask() {
      const replaced = loginData.CNPJCPF.replace(/\W/g, "");
      if (replaced.length <= 14) {
        return "99.999.999/9999-99";
      } else return "";
    }
    : "";
};

export const handleErrorCPF = (loginData) => {
  return loginData.Cpf
    ? function error() {
      const replaced = loginData.Cpf.replace(/\W/g, "");
      if (replaced.length <= 10) {
        return "Digite um CPF válido ex: 999.999.999-99 apenas números";
      } else return "";
    }
    : "";
};

export const handleErrorCNPJ = (loginData) => {
  return loginData.CNPJCPF
    ? function error() {
      const replaced = loginData.CNPJCPF.replace(/\W/g, "");
      if (replaced.length < 14) {
        return "Digite um CNPJ válido ex: 99.999.999/0001-99";
      } else return "";
    }
    : "";
};

export const handleErrorPassword = (loginData) => {
  return loginData.password
    ? function passwordCheck() {
      const pass = loginData.password;
      const confirmPass = loginData.CONFIRMEsenha;
      const regex = /\W/g;
      if (pass === "") {
        return "";
      }
      if (!regex.test(pass) || pass.length < 8) {
        return "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um caracter especial : @#$&";
      }
      if (pass !== confirmPass) {
        return "Senhas não conferem, digite a mesma senha em ambos os campos!";
      } else return "";
    }
    : "";
};

export const handleErrorNewPassword = (loginData) => {
  return loginData.NOVAsenha
    ? function passwordCheck() {
      const pass = loginData.NOVAsenha;
      const actualPass = loginData.ATUALsenha;
      const regex = /\W/g;
      if (pass === "") {
        return "";
      }
      if (!regex.test(pass) || pass.length < 8) {
        return "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um caracter especial : @#$&";
      }
      if (pass === actualPass) {
        return "Digite uma senha diferente da atual!."
      } else return "";
    }
    : "";
};

export const handleErroEmail = (loginData) => {
  return loginData.Email && loginData.CONFIRMEemail
    ? function emailCheck() {
      const email = loginData.Email;
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
      } else return "";
    }
    : "";
};

export const handleUpperCase = (arr) => {
  if (arr.Nome !== undefined) {
    let strings = [];
    let passwords = [];

    Object.entries(arr).map((item) => {
      if (
        item[0] !== "password" &&
        item[0] !== "CONFIRMEsenha" &&
        item[0] !== "plogin"
      ) {
        return strings.push([item[0], item[1].toUpperCase()]);
      } else return passwords.push([item[0], item[1]]);
    });

    strings = Object.fromEntries(strings);
    passwords = Object.fromEntries(passwords);
    return Object.assign(strings, passwords);
  } else return "";
};

export const handlePasswordHash = (loginData) => {
  const pass = loginData;
  if (pass) {
    return MD5(pass).toString().toUpperCase();
  } else {
    return null;
  }
};
