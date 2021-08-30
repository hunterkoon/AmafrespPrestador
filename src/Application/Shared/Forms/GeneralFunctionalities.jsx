import { addUserInfo, modUserInfo, updateInfo } from "../Commons/Constants/Info";

const GeneralFunctionalities = () => {
  function Functionalities(key, label,info, img) {
    const className = "GENERAL-CHECKBOX-CLASS";
    this.type = "checkbox";
    this.key = key;
    this.id = key;
    this.label = label;
    this.value = false;
    this.className = className;
    this.info = info
    //this.img receive image in just case
  }
  const UpdadeRegister = new Functionalities(
    "update", // general key
    "Atualização Cadastral", // label
      updateInfo // info
  );
  const RegisterNewUser = new Functionalities("newUser", "Cadastrar Usuários",addUserInfo);
  const ModifyUsers = new Functionalities("modifyUser", "Gerenciar Usuários" , modUserInfo);
  const SendXML = new Functionalities("sendXML", "Enviar XML");
  return {
    UpdadeRegister: UpdadeRegister,
    SendXML: SendXML,
    RegisterNewUser: RegisterNewUser,
    ModifyUsers: ModifyUsers,
  };
};
export default GeneralFunctionalities;
