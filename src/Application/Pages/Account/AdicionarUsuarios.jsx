import React from "react";
import { useInputsGeneral } from "../../Hooks/useInputs";
import { GlobalContext } from "../Main/GlobalContext";
import { handleUpperCase } from "../../Shared/Commons/Helpers/HandleInputs";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import Button from "../../Components/Sub/Button";
import "./AdicionarUsuarios.css";
import "../../../App.css";

const Usuarios = () => {
  const { newUserData, setNewUserData } = React.useContext(GlobalContext);
  const { addUserForm, addFunctionalitiesCheckbox } = GeneralForms(newUserData);
  // ADICIONA ITENS ANTERIORES AO ARRAY;
  const [functions, setFunctions] = React.useState(
    addFunctionalitiesCheckbox.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: field.value,
      };
    }, {})
  );
  const [newUser, setNewUser] = React.useState(
    addUserForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );
  // HANDLE VERIFICA SE CHECKBOX ESTA TRUE CASO ESTEJA POPULA LISTA COM TRUE,CASO NAO FALSE;
  const handleChangeUser = ({ target }) => {
    const { id, value } = target;
    setNewUser({ ...newUser, [id]: value });
  };
  const handleChangeFunctions = ({ target }) => {
    target.value = target.checked;
    if (target.checked) {
      setFunctions({
        ...functions,
        [target.id]: Boolean(target.value),
      });
    } else
      setFunctions({
        ...functions,
        [target.id]: Boolean(!target.value),
      });
  };
  // POPULA ARRAY NO GLOBAL CONTEXT;
  React.useEffect(() => { 
    setNewUserData({...functions , ...handleUpperCase(newUser)});    
  }, [functions, newUser, setNewUserData]);  
  // TODO FETCH;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUserData);
  };
  return (
    <>
      <div className="div-main-add-new-user pageView">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
          <Title text="Adicionar novo usuário" />
        </div>
        <div className="div-sub-add-new-user-data">
          <form className="form-add-new-user" onSubmit={handleSubmit}>
            <h1> Preencha os dados</h1>
            <div className="div-sub-add-new-user-input-area">
              {useInputsGeneral(addUserForm, handleChangeUser, newUser)}
            </div>
            <div className="div-sub-add-new-user-functions-area">
              <h1> Marque as funcões a serem liberadas</h1>
            </div>
            <div className="div-sub-add-new-user-checkbox-area">
              {useInputsGeneral(addFunctionalitiesCheckbox, handleChangeFunctions, functions )}
            </div>
            <div className="div-sub-add-new-user-button-area" > 
            <Button value="Cadastrar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Usuarios;
