/* eslint-disable eqeqeq */
import React from "react";
import { useInputsGeneral } from "../../../../Hooks/useInputs";
import GeneralForms from "../../../../Shared/Forms/GeneralForms";
import Button from "../../../../Components/Sub/Button";
import Style from "./Forms.module.css";
import "./UserChanges.css";
import { GlobalContext } from "../../../Main/GlobalContext";
import Title from "../../../../Components/Sub/Title";

const UserChanges = ({ ...props }) => {
  // RECEBE DADOS DO USUÁRIO A SER EXCLUIDO
  const [userDeleteProps, setUserDeleteProps] = React.useState(null);

  // RECEBE DADOS DO USUÁRIO A SER EDITADO
  const [userEditProps, setUserEditProps] = React.useState(null);

  // RECEBE ATUALIZAÇÕES DO HANDLECHANGE
  const [userSelectedForm, setUserSelectedForm] = React.useState([]);

  // RECEBE ATUALIZAÇOES DO HANDLECHANGFE
  const [functions, setFunctions] = React.useState([]);

  // TOGGLE MODAIS
  const [toggleExclude, setToggleExclude] = React.useState(false);
  const { toggleModal, setToggleModal } = React.useContext(GlobalContext);

  // RECEBE FORMULARIOS
  const { adjustsManangerUser, addFunctionalitiesCheckbox } =
    GeneralForms(userSelectedForm);

  // HANDLE CHANGES
  const handleChangeInputs = ({ target }) => {
    const { id, value } = target;
    setUserSelectedForm({ ...userSelectedForm, [id]: value });
  };

  const handleChangeFunctions = ({ target }) => {
    const checked = target.checked;
    setFunctions({ ...functions, [target.id]: checked });
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

  // COMPONENTE DE EXLUSAO DE FORMULARIO
  const DeleteForm = () => {
    return (
      <div className="div-table-delete-user">
        <table className="table-delete-user">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Departamento</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userDeleteProps.pnome}</td>
              <td>{userDeleteProps.pdepartamento}</td>
              <td>{userDeleteProps.cpf}</td>
            </tr>
          </tbody>
        </table>
        <div className="div-button-delete-user">
          <Button
            onClick={(e) => [e.preventDefault(), setToggleExclude(true)]}
            color="#E20000"
            value="Excluir"
          />
          <Button
            onClick={(e) => [e.preventDefault(), setUserDeleteProps(null)]}
            value="Voltar"
          />
        </div>
      </div>
    );
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

  //
  const [inputs, setInputs] = React.useState(InputsForms());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(functions);
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

  // ATUALIZA ESTADOS DA APLICAÇÃO PARA EVENTOS EXTERIORES
  React.useEffect(() => {
    setUserDeleteProps(props.deleteUser);
    setUserEditProps(props.user);
  }, [props.deleteUser, props.user]);

  // ATUALIZA EXIBIÇÃO DE VALORES EM FORMULÁRIOS.
  React.useEffect(() => {
    setInputs(InputsForms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSelectedForm, functions]);

  return (
    <>
      {toggleModal && userEditProps !== null ? (
        <div className="pageView div-main-user-mananger">
          <div className="div-sub-user-mananger">
            <form onSubmit={handleSubmit}>
              <h1>Guia de Alteração de usuário</h1>
              {inputs}
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

      {userDeleteProps ? (
        <div className="pageView div-main-user-mananger">
          <div className="div-sub-user-mananger-delete">
            <Title color={"#E20000"} text={"Exclusão de Usuário"} />
            <h1>Guia de Exclusão de usuário</h1>
            <div className="div-sub-form-user-mananger-button">
              {<DeleteForm />}
            </div>
          </div>
        </div>
      ) : null}

      {toggleExclude ? (
        <div className="pageView div-main-user-mananger">
          <div className="div-sub-user-mananger">
            <h1>Guia de Exclusão de usuário</h1>
            <span>Tem Certeza ? o usuário </span>
            <span style={{ color: "#f20000", fontWeight: "bold" }}>
              {userDeleteProps && userDeleteProps.pnome}
            </span>
            <span> será excluido permanentemente!</span>
            <div className="div-sub-form-user-mananger-button">
              <Button value="Sim" />
              <Button
                onClick={(e) => [
                  e.preventDefault(),
                  setToggleModal(false),
                  setToggleExclude(false),
                ]}
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
