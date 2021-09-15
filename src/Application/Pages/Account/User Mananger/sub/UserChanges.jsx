/* eslint-disable eqeqeq */
import React from "react";
import { useInputsGeneral } from "../../../../Hooks/useInputs";
import GeneralForms from "../../../../Shared/Forms/GeneralForms";
import Button from "../../../../Components/Sub/Button";
import Style from "./Forms.module.css";
import "./UserChanges.css";

const UserChanges = ({ ...props }) => {
  const [objProps, setObjProps] = React.useState(null);
  const [userSelectedForm, setUserSelectedForm] = React.useState([]);
  const [functions, setFunctions] = React.useState([]);
  const { adjustsManangerUser, addFunctionalitiesCheckbox } =   GeneralForms(userSelectedForm);

  const handleChangeInputs = ({ target }) => {
    const { id, value } = target;
    setUserSelectedForm({ ...userSelectedForm, [id]: value });
  };

  const handleChangeFunctions = ({ target }) => {
    const checked = target.checked;
    setFunctions({ ...functions, [target.id]: checked });
  };

  const validateFunctions = (field) => {
    if (field === "modifyUser") {
      if (objProps.privilegios.gerenciar == "null") {
        return false;
      } else return true;
    }
    if (field === "update") {
      if (objProps.privilegios.atualizar == "null") {
        return false;
      } else return true;
    }
    if (field === "newUser") {
      if (objProps.privilegios.adicionar == "null") {
        return false;
      } else return true;
    }
  };

  const InputForm = () => {
    return (
      <div className={Style.form}>
        {useInputsGeneral(
          adjustsManangerUser,
          handleChangeInputs,
          userSelectedForm
        )}
      </div>
    );
  };

  const CheckboxForm = () => {
    return (
      <div className="menuView div-sub-functions-user-mananger">
        {useInputsGeneral(
          addFunctionalitiesCheckbox,
          handleChangeFunctions,
          functions
        )}
      </div>
    );
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(functions);
  };

  React.useEffect(() => {
    if (objProps !== null) {
      setUserSelectedForm(
        adjustsManangerUser.reduce((acc, field) => {
          return {
            ...acc,
            [field.id]: Object.entries(objProps)
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
            [field.id]: validateFunctions(field.id),
          };
        }, {})
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objProps]);

  React.useEffect(() => {
    setObjProps(props.props);
  }, [props.props]);


  return (
    <>
      {objProps ? (
        <div className="pageView div-main-user-mananger">
          <div className="div-sub-user-mananger">
            <form onSubmit={handleSubmit}>
              <h1>Guia de Alteração de usuário</h1>
              <InputForm />
              <CheckboxForm />
              <div className="div-sub-form-user-mananger-button">
                <Button value="Alterar" />
                <Button
                  onClick={(e) => [e.preventDefault() , setObjProps(null)]}
                  color="#E20000"
                  value="Fechar"
                />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserChanges;
