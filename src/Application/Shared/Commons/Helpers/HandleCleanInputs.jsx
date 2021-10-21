// LIMPAR FORMULARIO
export const handleCleanInputs = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((item) => {
    if (item.value) {
      item.value = "";
    }
    if (item.type === "checkbox") {
      item.checked = false;
    }
  });
  setNewUser(
    addUserForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );
};
