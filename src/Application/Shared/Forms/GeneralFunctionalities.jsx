import {
  addUserInfo,
  modUserInfo,
  updateInfo,
} from "../Commons/Constants/info-strings";

const GeneralFunctionalities = () => {
  function Functionalities(type, key, label, info, require,name) {
    const className = "GENERAL-CHECKBOX-CLASS";
    this.type = type;
    this.key = key;
    this.id = key;
    this.label = label;
    this.value = false;
    this.className = className;
    this.info = info && info;
    this.require = require;
    this.name = name;
    //this.img receive image in just case
  }
  const UpdadeRegister = new Functionalities(
    "checkbox", // type
    "update", // general key
    "Atualização Cadastral", // label
    updateInfo ,// info
    false, // require
  );
  //FUNCIONALIDADES DE USUARIOS
  const RegisterNewUser = new Functionalities(
    "checkbox",
    "newUser",
    "Cadastrar Usuários",
    addUserInfo,
    false
  );
  const ModifyUsers = new Functionalities(
    "checkbox",
    "modifyUser",
    "Gerenciar Usuários",
    modUserInfo,
    false
  );

  //DADOS CADASTRAIS

  const addressTypeMain = new Functionalities(
    "radio",
    "addressTypeMain",
    "Princial/Atendimento",
    '',
    true,
    'addressType'
  );
  const addressTypePostal = new Functionalities(
    "radio",
    "addressTypePostal",
    "Somente Correspondência",
    '',
    true,
    'addressType',
  );

  return {
    UpdadeRegister: UpdadeRegister,
    RegisterNewUser: RegisterNewUser,
    ModifyUsers: ModifyUsers,
    addressTypeMain: addressTypeMain,
    addressTypePostal: addressTypePostal,
  };
};
export default GeneralFunctionalities;
