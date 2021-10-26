import { nameOfFunc, valuesOfFunc } from "../Constants/NameIdFunctions";

export const HandleObjectFunctions = (func) => {
  const arr = [];

  function Funcionalidade(item, item2) {
    this.nome = item;
    this.idFuncionalidade = item2
  }

  Object.entries(func).map((item) => {
    if (item[1] == true) {
      arr.push(new Funcionalidade(nameOfFunc[item[0]], valuesOfFunc[item[0]]));
    }
  })
  const fun = { Funcionalidades: [...arr] }
  return fun;
}