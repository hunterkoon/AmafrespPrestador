
import update from '../../../Assets/Recadastro_White.svg'
const functionalitiesConsts = () => {
  function Functionalities(key, label,img) {
    this.type = "checkbox";
    this.key = key;
    this.id = key;
    this.value = key;
    this.label = label;
    this.img = img;
    this.className = "GENERAL-CHECKBOX-CLASS";

  }

  const UpdadeRegister = new Functionalities("update", "Atualização Cadastral",update);
  const SendXML = new Functionalities("sendXML", "Enviar XML ");
  const RegisterNewUser = new Functionalities("newUser", "Cadastrar Usuários");
  const ModifyUsers = new Functionalities("modifyUser", "Gerenciar Usuários");

  return {
    UpdadeRegister: UpdadeRegister,
    SendXML: SendXML,
    RegisterNewUser: RegisterNewUser,
    ModifyUsers: ModifyUsers,
  };
};

export default functionalitiesConsts;
