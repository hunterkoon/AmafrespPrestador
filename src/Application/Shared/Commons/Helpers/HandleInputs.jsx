export const handleMaskCPF = (loginData) => {
  return loginData.cpf && loginData.cpf
    ? function mask() {
        const replaced = loginData.cpf.replace(/\W/g, "");
        if (replaced.length <= 11) {
          return "999.999.999-99";
        } else return "";
      }
    : "";
};
export const handleMaskCNPJ = (loginData) => {
  return loginData.cnpj && loginData.cnpj
    ? function mask() {
        const replaced = loginData.cnpj.replace(/\W/g, "");
        if (replaced.length <= 14) {
          return "99.999.999/9999-99";
        } else return "";
      }
    : "";
};

export const handleErrorCPF = (loginData) => {
  return loginData.cpf
    ? function error() {
        const replaced = loginData.cpf.replace(/\W/g,"");
        if (replaced.length < 11) {
          return "Digite um CPF válido ex: 999.999.999-99 apenas números";
        } else return "";
      }
    : "";
};

export const handleErrorCNPJ = (loginData) => {
  return loginData.cnpj
    ? function error() {
        const replaced = loginData.cnpj.replace(/\W/g, "");
        if (replaced.length < 14) {
          return "Digite um CNPJ válido ex: 99.999.999/0001-99";
        } else return "";
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
        const regex = /\W/g;
        if (pass === "") {
          return "";
        }
        if (!regex.test(pass) || pass.length < 8) {
          return "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um caracter especial : @#$&";
        } else return "";
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
        } else return "";
      }
    : "";
};

export const handleUpperCase = (arr) => {
  if (arr.pnome !== undefined) {
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
  } else return "";
};

// export const handleCepReplaced = (loginData) => {
//   let replacedCEP = loginData.cep

//   if(replacedCEP.length > 8){
//   //  replacedCEP = loginData.cep.replace(/\D/g, "");
//     console.log(replacedCEP)
//   }
//   return replacedCEP;
// };
