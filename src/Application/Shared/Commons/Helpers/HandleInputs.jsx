export const handleMask = (loginData) => {
  const replaced = loginData.CNPJCPF && loginData.CNPJCPF.replace(/\W/g, "");
  if (replaced && replaced.length <= 11) {
    return "999.999.999-99";
  }
  if (replaced && replaced.length === 14) {
    return "99.999.999/9999-99";
  }
  if (replaced && replaced.length > 18) {
    return "";
  } else 
    return "";
};
export const handleErrorCpfCnpf = (loginData) => {
  const replaced = loginData.CNPJCPF && loginData.CNPJCPF.replace(/\W/g, "");
  if (replaced && (replaced.length < 11 || replaced.length > 14)) {
    return "Digite um CPF ou CNPJ válido ex: 999.999.999-99 ou 99.999.999/0001-99";
  }
  if (replaced && replaced.length > 11 && replaced.length < 14) {
    return "Digite um CNPJ válido ex: 99.999.999/0001-99";
  }
};
export const handleErrorPassword = (loginData) => {
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
};
export const handleErroEmail = (loginData) => {
 
  const email = loginData.email;
  const confirmEmail = loginData.CONFIRMEemail;
  const regex = /\W/g;

  if (email !== confirmEmail) {
    return "Emails não conferem, verifique a digitação!.";
  }
  if (!regex.test(confirmEmail)) {
    return "Por favor digite um e-mail válido!.";
  }
};
