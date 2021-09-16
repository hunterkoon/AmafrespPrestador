/* eslint-disable eqeqeq */
import React from "react";
import { useInputsGeneral } from "../../../../Hooks/useInputs";
import GeneralForms from "../../../../Shared/Forms/GeneralForms";
import Button from "../../../../Components/Sub/Button";
import Style from "./Forms.module.css";
import "./UserChanges.css";
import { GlobalContext } from "../../../Main/GlobalContext";

const UserChanges = ({ ...props }) => {
  const [userDeleteProps, setUserDeleteProps] = React.useState(null);
  const [userEditProps, setUserEditProps] = React.useState(null);
  const [userSelectedForm, setUserSelectedForm] = React.useState([]);
  const [functions, setFunctions] = React.useState([]);
  const { toggleModal, setToggleModal } = React.useContext(GlobalContext);
  const { adjustsManangerUser, addFunctionalitiesCheckbox } =
    GeneralForms(userSelectedForm);

  const handleChangeInputs = ({ target }) => {
    const { id, value } = target;
    setUserSelectedForm({ ...userSelectedForm, [id]: value });
  };

  const handleChangeFunctions = ({ target }) => {
    const checked = target.checked;
    setFunctions({ ...functions, [target.id]: checked });
  };

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
        <div className='div-button-delete-user'>
          <Button
            onClick={(e) => [e.preventDefault(), setUserDeleteProps(null)]}
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

  const [ inputs , setInputs] = React.useState(InputsForms())


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(functions);
  };

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

  React.useEffect(() => {
    setUserDeleteProps(props.deleteUser);
    setUserEditProps(props.user);
  }, [props.deleteUser, props.user]);

  React.useEffect(()=>{
    setInputs(InputsForms())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userSelectedForm, functions])


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
            <h1>Guia de Exclusão de usuário</h1>
            <div className="div-sub-form-user-mananger-button">
              {<DeleteForm />}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserChanges;
