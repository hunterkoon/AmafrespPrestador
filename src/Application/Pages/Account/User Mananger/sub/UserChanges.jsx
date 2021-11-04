
//#region IMPORTS 

import React from "react";
import useInputs from "../../../../Hooks/useInputs";
import GeneralForms from "../../../../Shared/Forms/GeneralForms";
import Button from "../../../../Components/Sub/Button";
import Style from "./Forms.module.css";
import Succesfull from "../../../../Components/Sub/Modal";
import useErrorForm from "../../../../Hooks/useErrorForm";
import { HandleObjectFunctions } from "../../../../Shared/Commons/Helpers/HandleObjectFunctions";
import { filterFunctions } from "../../../../Hooks/useFilterFunctions";
import { adjustsUserSubmit, statusUserSubmit, } from "../../../../Hooks/useSubmitDada";
import { GlobalContext } from "../../../Main/GlobalContext";
import { validateFunctions } from "../../../../Hooks/useValidadeFunctions";
import "./UserChanges.css";

//#endregion

const UserChanges = ({ ...props }) => {

  //#region ESTADOS DA APLICAÇÃO

  const { toggleModal, setToggleModal, _ChangeUserData, setChangeData, _DeactiveUser } = React.useContext(GlobalContext);
  const { useInputsGeneral } = useInputs();

  // RECEBE DADOS DO USUÁRI
  const [userDeleteProps, setUserDeleteProps] = React.useState(null);
  const [userEditProps, setUserEditProps] = React.useState(null);

  // RECEBE ATUALIZAÇÕES DO HANDLECHANGE
  const [userSelectedForm, setUserSelectedForm] = React.useState([]);
  const [functions, setFunctions] = React.useState([]);

  // TOGGLE MODAIS
  const [alertSuccesful, setAlertSuccesful] = React.useState(false);
  const [alertExclude, setAlertExclude] = React.useState(false);
  const [activeToggle, setActiveToggle] = React.useState(null);

  // RECEBE FORMULARIOS
  const { adjustsManangerUser, addFunctionalitiesCheckbox } = GeneralForms(userSelectedForm);

  //VERIFICA ERROS NO FORMULARIO
  const err = useErrorForm(adjustsManangerUser);

  //#endregion

  //#region OBJETO DE ENVIO

  const [objectSend, setObjectSend] = React.useState({});
  const UsersSubmit = Object.assign(adjustsUserSubmit(userSelectedForm), objectSend, HandleObjectFunctions(functions));

  React.useEffect(() => {
    setObjectSend({
      IdUsuario: userEditProps?.idUsuario,
      IdPrestador: userEditProps?.idPrestador,
      Ativo: activeToggle,
      Funcionalidades: userEditProps?.Funcionalidades,
    });
  }, [userEditProps, activeToggle]);


  //#endregion

  //#region HANDLE CHANGES
  const handleChangeInputs = ({ target }) => {
    const { id, value } = target;
    setUserSelectedForm({ ...userSelectedForm, [id]: value });
  };

  const handleChangeFunctions = ({ target }) => {
    const checked = target.checked;
    setFunctions({ ...functions, [target.id]: checked });
  };
  //#endregion

  //#region ATUALIZA ESTADOS 
  React.useEffect(() => {
    setUserDeleteProps(props.deleteUser?.profile);
    setUserEditProps(props.user?.profile);
    setActiveToggle(props.user?.profile.ativo)
  }, [props.deleteUser?.profile, props.user?.profile]);
  //#endregion

  //#region HANDLES SUBMIT

  const handleSubmit = () => {
    if (err === true) {
      setAlertSuccesful(!alertSuccesful)
      _ChangeUserData(UsersSubmit)
      setChangeData({ UsersSubmit: UsersSubmit, Status: true })
    }
  };

  const handleSubmitStatus = () => {
    setAlertExclude(!alertExclude)
    setToggleModal(false)
    _DeactiveUser(UsersSubmit)
    try {

      setActiveToggle(!activeToggle)
      setChangeData({ UsersSubmit: UsersSubmit, Status: !activeToggle })
    }
    catch{
      throw "Falha"
    }
  };

  //#endregion

  //#region FORMULARIOS
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
        </div>
      </>
    );
  };
  //#endregion

  //#region CICLO DE VIDA DOS COMPONENTES
  React.useEffect(() => {
    if (userEditProps || userDeleteProps) {
      setUserSelectedForm(
        adjustsManangerUser.reduce((acc, field) => {
          return {
            ...acc,
            [field.id]: Object.entries(userEditProps ? userEditProps : userDeleteProps)
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
            [field.id]: validateFunctions(field.id,
              filterFunctions(userEditProps ? userEditProps : userDeleteProps)
            ),
          };
        }, {})
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEditProps, userDeleteProps]);
  //#endregion

  return (
    <>
      <Succesfull
        alert={alertSuccesful}
        onClick={() => [setAlertSuccesful(!alertSuccesful)]}
        disclaimer={"Usuário Alterado!"}
      />
      <Succesfull
        alert={alertExclude}
        onClick={() => setAlertExclude(!alertExclude)}
        disclaimer={"Usuário Alterado!"}
      />


      {props.user?.open && toggleModal ? (
        <div className="div-main-user-mananger">
          <div className="pageView div-sub-user-mananger">
            <form onSubmit={(e) => [e.preventDefault(), handleSubmit()]}>
              <h1>Guia de Alteração de usuário</h1>
              {InputsForms()}
              <div className="div-sub-form-user-mananger-button">
                <Button value="Alterar" />
                <Button
                  onClick={(e) => [e.preventDefault(), setToggleModal(false)]}
                  color="#E20000"
                  value="Fechar"
                />
              </div>
            </form>
          </div>
        </div>
      ) : null}


      {props.deleteUser?.open && toggleModal ? (
        <div className="div-main-user-mananger">
          <div className="pageView div-sub-user-mananger-confirm">
            <h1>Guia de {userDeleteProps && userDeleteProps.ativo ? "Inativação" : "Ativação"} de usuário</h1>
            <div className="div-sub-user-mananger-text">
              <h3>
                Tem Certeza ? <span style={{ color: "#FDAB15" }}> {userDeleteProps?.nome} </span> Será {!userDeleteProps?.ativo ? "Ativado" : "Inativado"} !
              </h3>
            </div>
            <div className="div-sub-form-user-mananger-button">
              <Button
                value="Sim"
                onClick={(e) => [
                  e.preventDefault(),
                  handleSubmitStatus()
                ]}
              />
              <Button
                onClick={(e) => [e.preventDefault(), setToggleModal(false)]}
                color="#FDAB15"
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
