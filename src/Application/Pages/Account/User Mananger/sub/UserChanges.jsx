/* eslint-disable eqeqeq */
import React from "react";
import useInputs from "../../../../Hooks/useInputs";
import GeneralForms from "../../../../Shared/Forms/GeneralForms";
import Button from "../../../../Components/Sub/Button";
import Style from "./Forms.module.css";
import { GlobalContext } from "../../../Main/GlobalContext";
import { adjustsUserSubmit, deleteUserSubmit } from "../../../../Hooks/useSubmitDada";
import Succesfull from "../../../../Components/Sub/Succesfull";
import "./UserChanges.css";

const UserChanges = ({ ...props }) => {
  const { useInputsGeneral } = useInputs();
  // RECEBE DADOS DO USUÁRIO A SER EXCLUIDO
  const [userDeleteProps, setUserDeleteProps] = React.useState(null);
  // RECEBE DADOS DO USUÁRIO A SER EDITADO
  const [userEditProps, setUserEditProps] = React.useState(null);
  // RECEBE ATUALIZAÇÕES DO HANDLECHANGE
  const [userSelectedForm, setUserSelectedForm] = React.useState([]);
  // RECEBE ATUALIZAÇOES DO HANDLECHANGFE
  const [functions, setFunctions] = React.useState([]);
  // TOGGLE MODAIS
  const [alertSuccesful, setAlertSuccesful] = React.useState(false);
  const [alertExclude, setAlertExclude] = React.useState(false);
  const { toggleModal, setToggleModal } = React.useContext(GlobalContext);
  // RECEBE FORMULARIOS
  const { adjustsManangerUser, addFunctionalitiesCheckbox } = GeneralForms(userSelectedForm);

  const deleteUsersSubmit = deleteUserSubmit(userSelectedForm);
  const changesUsersSubmit = Object.assign( adjustsUserSubmit(userSelectedForm),functions);

  // HANDLE CHANGES
  const handleChangeInputs = ({ target }) => {
    const { id, value } = target;
    setUserSelectedForm({ ...userSelectedForm, [id]: value });
  };

  const handleChangeFunctions = ({ target }) => {
    const checked = target.checked;
    setFunctions({ ...functions, [target.id]: checked });
  };

  // ATUALIZA ESTADOS DA APLICAÇÃO PARA EVENTOS EXTERIORES
  React.useEffect(() => {
    setUserDeleteProps(props.deleteUser?.profile);
    setUserEditProps(props.user?.profile);
  }, [props.deleteUser?.profile, props.user?.profile]);

  const handleSubmit = ({ target }) => {
    //TODO FECTH FUNCTIONS 

    if (target.tagName == "FORM") {
      console.log(changesUsersSubmit);
    } else {
      console.log(deleteUsersSubmit);
    }
  };

  // VALIDAÇÃO DE DADOS RECEBIDOS
  const validateFunctions = (field, state) => {
    if (field === "modifyUser") {
      if (state.privilegios.gerenciar == "null") {
        return false;
      } else return true;
    }
    if (field === "update") {
      if (state.privilegios.atualizar == "null") {
        return false;
      } else return true;
    }
    if (field === "newUser") {
      if (state.privilegios.adicionar == "null") {
        return false;
      } else return true;
    }
  };
  // COMPONENTE COM FORMULARIOS

  const InputsForms = () => {
    return (
      <>
        <div className={Style.form}>
          {useInputsGeneral(
            adjustsManangerUser,
            handleChangeInputs,
            userSelectedForm
          )}
        </div>
        <div className="menuView div-sub-functions-user-mananger">
          {useInputsGeneral(
            addFunctionalitiesCheckbox,
            handleChangeFunctions,
            functions
          )}
          <div className="div-sub-form-user-mananger-button">
            <Button
              onClick={() => setAlertSuccesful(!alertSuccesful)}
              value="Alterar"
            />
            <Button
              onClick={(e) => [e.preventDefault(), setToggleModal(false)]}
              color="#E20000"
              value="Fechar"
            />
          </div>
        </div>
      </>
    );
  };

  // CICLO DE VIDA DOS COMPONENTES
  React.useEffect(() => {
    if (userEditProps || userDeleteProps) {
      setUserSelectedForm(
        adjustsManangerUser.reduce((acc, field) => {
          return {
            ...acc,
            [field.id]: Object.entries(
              userEditProps ? userEditProps : userDeleteProps
            )
              .map((item) => (item[0] === field.id ? item[1] : ""))
              .filter((str) => str !== "")
              .toString(),
          };
        }, {})
      );
      setFunctions(
        addFunctionalitiesCheckbox.reduce((acc, field) => {
          return {
            ...acc,
            [field.id]: validateFunctions(
              field.id,
              userEditProps ? userEditProps : userDeleteProps
            ),
          };
        }, {})
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEditProps, userDeleteProps]);

  return (
    <>
      <Succesfull
        alert={alertSuccesful}
        onClick={() => setAlertSuccesful(!alertSuccesful)}
        text={"Usuário Alterado!"}
      />
      <Succesfull
        alert={alertExclude}
        onClick={() => setAlertExclude(!alertExclude)}
        text={"Usuário Excluído!"}
      />

      {props.user?.open && toggleModal ? (
        <div className="div-main-user-mananger">
          <div className="pageView div-sub-user-mananger">
            <form onSubmit={(e) => [e.preventDefault(), handleSubmit(e)]}>
              <h1>Guia de Alteração de usuário</h1>
              {InputsForms()}
            </form>
          </div>
        </div>
      ) : null}

      {props.deleteUser?.open && toggleModal ? (
        <div className="div-main-user-mananger">
          <div className="pageView div-sub-user-mananger-confirm">
            <h1>Guia de Exclusão de usuário</h1>
            <span>Tem Certeza ?</span>
            <span
              style={{
                color: "#f20000",
                fontWeight: "bold",
              }}
            >
              {userDeleteProps && userDeleteProps?.pnome}
            </span>
            <span> será excluido permanentemente!</span>
            <div className="div-sub-form-user-mananger-button">
              <Button
                value="Sim"
                onClick={(e) => [
                  setAlertExclude(!alertExclude),
                  setToggleModal(false),
                  handleSubmit(e),
                ]}
              />
              <Button
                onClick={(e) => [e.preventDefault(), setToggleModal(false)]}
                color="#E20000"
                value="Não"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserChanges;