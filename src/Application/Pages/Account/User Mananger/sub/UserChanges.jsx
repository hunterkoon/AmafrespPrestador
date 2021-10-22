/* eslint-disable eqeqeq */
import React from "react";
import useInputs from "../../../../Hooks/useInputs";
import GeneralForms from "../../../../Shared/Forms/GeneralForms";
import Button from "../../../../Components/Sub/Button";
import Style from "./Forms.module.css";
import { GlobalContext } from "../../../Main/GlobalContext";
import { adjustsUserSubmit, deleteUserSubmit, } from "../../../../Hooks/useSubmitDada";
import Succesfull from "../../../../Components/Sub/Modal";
import "./UserChanges.css";
import useErrorForm from "../../../../Hooks/useErrorForm";
import { HandleObjectFunctions } from "../../../../Shared/Commons/Helpers/HandleObjectFunctions";

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
  const { toggleModal, setToggleModal, _ChangeUserData, setchangeData } = React.useContext(GlobalContext);
  // RECEBE FORMULARIOS
  const [objectSend, setObjectSend] = React.useState({});
  const { adjustsManangerUser, addFunctionalitiesCheckbox } = GeneralForms(userSelectedForm);
  // MONTA OBJETOS DE ENVIO
  const deleteUsersSubmit = Object.assign(deleteUserSubmit(userSelectedForm), objectSend);
  const changesUsersSubmit = Object.assign(adjustsUserSubmit(userSelectedForm), objectSend, HandleObjectFunctions(functions));
  //VERIFICA ERROS NO FORMULARIO
  const err = useErrorForm(adjustsManangerUser);

  // ADICIONA ITENS AO OBJETO PAI
  React.useEffect(() => {
    setObjectSend({
      IdUsuario: userEditProps && userEditProps.idUsuario,
      IdPrestador: userEditProps && userEditProps.idPrestador,
    });
  }, [userEditProps]);

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

  const handleSubmit = () => {
    if (err === true) {
      setAlertSuccesful(!alertSuccesful);
      _ChangeUserData(changesUsersSubmit);
      // ATUALIZA ELEMENTOS PARA  INTEFACE
      setchangeData(changesUsersSubmit);
    }
  };

  const filterFunctions = (state) => {
    let filterFunc;
    if (state.Funcionalidades)
      filterFunc = state.Funcionalidades.map((list) => {
        if (list?.nome) {
          return list.nome;
        }
        return null;
      });
    return filterFunc;
  };

  // VALIDAÇÃO DE DADOS RECEBIDOS
  //recebe o estado de filterfunctions e compara cada elemento da array.
  const validateFunctions = (field, state) => {

    const idValidate = {
      priceTable: "Consulta tabela de preços",
      addNewUser: "Incluir Usuário",
      manangerUsers: "Gerenciar Usuários"
    };
    if (state) {
      if (idValidate[field] == state.filter((i) => i == idValidate[field])) {
        return true;
      }
    }
    return false;
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
            [field.id]: validateFunctions(field.id,
              filterFunctions(userEditProps ? userEditProps : userDeleteProps)
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
        onClick={() => [setAlertSuccesful(!alertSuccesful)]}
        disclaimer={"Usuário Alterado!"}
      />
      <Succesfull
        alert={alertExclude}
        onClick={() => setAlertExclude(!alertExclude)}
        disclaimer={"Usuário Excluído!"}
      />

      {props.user?.open && toggleModal ? (
        <div className="div-main-user-mananger">
          <div className="pageView div-sub-user-mananger">
            <form onSubmit={(e) => [e.preventDefault(), handleSubmit()]}>
              <h1>Guia de Alteração de usuário</h1>
              {/* FORMULARIO DE ENVIO */}
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
      {/* FORMULARIO DE DELETE */}
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
              {userDeleteProps && userDeleteProps?.nome}
            </span>
            <span> será excluido permanentemente!</span>
            <div className="div-sub-form-user-mananger-button">
              <Button
                value="Sim"
                onClick={(e) => [
                  setAlertExclude(!alertExclude),
                  setToggleModal(false),
                  /* TODO Submit*/
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
