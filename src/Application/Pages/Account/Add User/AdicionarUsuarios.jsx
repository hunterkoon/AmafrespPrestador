import React from "react";
import useInputs from "../../../Hooks/useInputs";
import { GlobalContext } from "../../Main/GlobalContext";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import Title from "../../../Components/Sub/Title";
import GeneralForms from "../../../Shared/Forms/GeneralForms";
import Button from "../../../Components/Sub/Button";
import Succesfull from "../../../Components/Sub/Succesfull";
import useErrorForm from "../../../Hooks/useErrorForm";
import { addUserSubmit } from "../../../Hooks/useSubmitDada";
import "./AdicionarUsuarios.css";
import Style from "./Forms.module.css";

const Usuarios = () => {
  
  const {useInputsGeneral } = useInputs()
  const { newUserData, setNewUserData } = React.useContext(GlobalContext);
  const { addUserForm, addFunctionalitiesCheckbox } = GeneralForms(newUserData);
  const [err, setErr] = React.useState(false);
  const erroForm = useErrorForm(addUserForm);

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

  const addUserOBJ = Object.assign(functions, addUserSubmit(newUser));

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
    setNewUserData({ ...functions, ...newUser });
  }, [functions, newUser, setNewUserData]);

  // TODO FETCH;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (erroForm) {
      setErr(true);
      console.log(addUserOBJ);
    } else setErr(false);
  };

  // LIMPAR FORMULARIO

  const handleCleanInputs = () => {
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

  return (
    <>
      <div className="div-main-add-new-user pageView">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
          <Title text="Adicionar novo usuário" />
        </div>
        <div className="div-sub-add-new-user-data">
          <form id="form" className="form-add-new-user" onSubmit={handleSubmit}>
            <h1> Preencha os dados</h1>

            <div className={Style.form}>
              {useInputsGeneral(
                addUserForm,
                handleChangeUser,
                newUser,
              )}

            </div>
            <div className="div-sub-add-new-user-functions-area">
              <h1> Marque as funcões a serem liberadas</h1>
            </div>
            <div className="div-sub-add-new-user-checkbox-area">
              {useInputsGeneral(
                addFunctionalitiesCheckbox,
                handleChangeFunctions,
                functions
              )}
            <div className="div-sub-add-new-user-button-area">
              <Button value="Cadastrar" />
              <Button
                onClick={(e) => [e.preventDefault(), handleCleanInputs()]}
                color="#FDAB15"
                value="Limpar"
                class="button-limpar"
              />
            </div>

            </div>

          </form>
        </div>


      </div>
      <>
      <Succesfull
          text={"Usuário Registrado"}
          alert={err}
          onClick={() => setErr(!err)}
        />
      </>
    </>
  );
};
export default Usuarios;
