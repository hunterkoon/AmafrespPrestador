export const validateFunctions = (field, state) => {

  const idValidate = {
    priceTable: "Consulta tabela de preços",
    addNewUser: "Incluir Usuário",
    manangerUsers: "Gerenciar Usuários"
  };
  if (state) {
    if (idValidate[field] == state.filter((i) => i == idValidate[field])) {
      return true;
    }
  }
  return false;
};
