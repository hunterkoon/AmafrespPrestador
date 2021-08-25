import React from "react";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import { useInputsGeneral } from "../../Hooks/useInputs";
import { GlobalContext } from "../Main/GlobalContext";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import Button from "../../Components/Sub/Button";
import "./AdicionarUsuarios.css";
import "../../../App.css";
// import { optionsPermitions } from "../../Shared/Forms/GeneralPermitionsOptions";
// import Input from "../../Components/Sub/Input";

const Usuarios = () => {
  const { newUserData, setNewUserData } = React.useContext(GlobalContext);
  const { addUserForm } = GeneralForms(newUserData);

  const [newUser, setNewUser] = React.useState(
    addUserForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );

  React.useEffect(() => {
    setNewUserData(newUser);
  }, [setNewUserData, newUser]);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setNewUser({ ...newUser, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="div-main-add-new-user pageView">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
          <Title text="Adicionar novo usuário" />
        </div>

        <div className="div-sub-add-new-user-data">
          <form onSubmit={handleSubmit}>
            <div className="div-sub-add-new-user-input-area">
              <h1> Preencha os dados</h1>
              {useInputsGeneral(addUserForm, newUser, handleChange, "inputsClassSpecific")}            
            </div>
            <div className="div-sub-add-new-user-functions-area">
              <h1> Marque as funcões a serem liberadas</h1>
              <Button value="Cadastrar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Usuarios;
