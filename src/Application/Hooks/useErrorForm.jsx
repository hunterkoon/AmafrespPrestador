// VERIFICA EXISTENCIA DE ERRO PARA EXIBIR MENSAGENS DE CADASTRO DE USUÁRIO
import React from "react";

const useErrorForm = (form) => {
  const forms = form;
  const [boo, setBoo] = React.useState(Boolean);

  const filtered = forms
    .map((item) => item.error)
    .filter((i) => typeof i === "string");
  let capture = filtered.filter((item) => item !== "");

  React.useEffect(() => {
    if (capture.length === 0) {
      setBoo(true);
    } else {
      setBoo(false);
    }
  }, [capture.length, filtered]);

  return boo;
};

export default useErrorForm;
