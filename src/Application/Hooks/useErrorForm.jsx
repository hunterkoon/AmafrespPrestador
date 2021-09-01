// VERIFICA EXISTENCIA DE ERRO PARA EXIBIR MENSAGENS DE CADASTRO DE USUÁRIO
import React from "react";

const useErrorForm = (form) => {
  const forms = form;
  const [boo, setBoo] = React.useState(Boolean);

  const filtered = forms
    .map((item) => item.error)
    .filter((i) => typeof i === "string");

  function handleState(items, setState) {
    if (items === "") {
      return setState(true);
    } else {
      return setState(false);
    }
  }
  React.useEffect(() => {
    for (let item of filtered) {
     return handleState(item, setBoo);
    }
  }, [filtered]);

  return boo;
};
export default useErrorForm;
