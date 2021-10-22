// LIMPAR FORMULARIO
export const handleCleanInputs = (state, setstate) => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((item) => {
    if (item.value) {
      item.value = "";
    }
    if (item.type === "checkbox") {
      item.checked = false;
    }
  });
  setstate(
    state.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );
};
