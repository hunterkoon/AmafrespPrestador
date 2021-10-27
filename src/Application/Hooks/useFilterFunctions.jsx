export const filterFunctions = (state) => {
  let filterFunc;
  if (state.Funcionalidades)
    filterFunc = state.Funcionalidades.map((list) => {
      if (list?.nome) {
        return list.nome;
      }
      return null;
    });
  return filterFunc;
};