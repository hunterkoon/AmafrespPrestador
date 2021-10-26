export const HandleObjectFunctions = (func) => {
  const arr = [];

  function Funcionalidade(item, item2) {
    this.nome = item;
    this.idFuncionalidade = item2
  }

  const valuesOfFunc = {
    manangerUsers: 1,
    addNewUser: 2,
    priceTable: 3,
  }
  const nameOfFunc = {
    manangerUsers: "Gerenciar Usuários",
    addNewUser: "Adicionar Usuários",
    priceTable: "Consultar Tabela de Preços",
  }

  Object.entries(func).map((item) => {
    if (item[1] == true) {
      arr.push(new Funcionalidade(nameOfFunc[item[0]], valuesOfFunc[item[0]]));
    }
  })
  const fun = { Funcionalidades: [...arr] }
  return fun;
}