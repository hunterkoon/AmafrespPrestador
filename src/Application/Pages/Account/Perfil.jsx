import React from "react";
import Title from "../../Components/Sub/Title";
import Titledecorated from "../../Components/Sub/Titledecorated";
import { useInputsGeneral } from "../../Hooks/useInputs";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import "./Perfil.css";
import "../../../App.css";
import Button from "../../Components/Sub/Button";
import { GlobalContext } from "../Main/GlobalContext";

const Perfil = () => {
  const { alterRegisterData, setAlterRegisterData, newUserData } =
    React.useContext(GlobalContext);
  const { adjustsUserForm } = GeneralForms(alterRegisterData);

  const returnFilter = (newUserData, field) => {
    const idFilter = Object.entries(newUserData).filter((item) => {
      return item[0] === field.id ? item[0]?.[1] : null;
    });
    return idFilter[0]?.[1];
  };

  const [adjustsByUser, setAdjustsByUser] = React.useState(
    adjustsUserForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: returnFilter(newUserData, field),
      };
    }, {})
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setAdjustsByUser({ ...adjustsByUser, [id]: value });
  };

  React.useEffect(() => {
    setAlterRegisterData({...adjustsByUser });
  }, [adjustsByUser, setAlterRegisterData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(adjustsByUser);
  };
  return (
    <div className="div-main-perfil pageView">
      <div className="div-title-pages">
        <Titledecorated text="Meu Perfil" />
        <Title text="Ajustes" />
      </div>
      <div className="div-sub-adjusts-user-data">
        <form className="form-adjusts-use" onSubmit={handleSubmit}>
          <h1> Alteração de dados.</h1>
          <div className="div-adjusts-user-inputs-area">
            {useInputsGeneral(adjustsUserForm, handleChange, adjustsByUser)}
          </div>
          <div className="div-sub-adjusts-user-button-area">
            <Button value="Alterar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
