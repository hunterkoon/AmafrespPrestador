const GeneralFunctionalities = () => {
  const className = "GENERAL-CHECKBOX-CLASS";
  function Functionalities(key, label, img) {
    this.type = "checkbox";
    this.key = key;
    this.id = key;
    this.label = label;
    this.value = false;
    this.className = className;
    //this.img receive image in just case
  }
  const UpdadeRegister = new Functionalities(
    "update", // general key
    "Atualização Cadastral" // label
  );
  const SendXML = new Functionalities("sendXML", "Enviar XML");
  const RegisterNewUser = new Functionalities("newUser", "Cadastrar Usuários");
  const ModifyUsers = new Functionalities("modifyUser", "Gerenciar Usuários");
  return {
    UpdadeRegister: UpdadeRegister,
    SendXML: SendXML,
    RegisterNewUser: RegisterNewUser,
    ModifyUsers: ModifyUsers,
  };
};
export default GeneralFunctionalities;
