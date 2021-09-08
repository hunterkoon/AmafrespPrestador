import React from "react";
import Titledecorated from "../../Components/Sub/Titledecorated";
import { useInputsGeneral } from "../../Hooks/useInputs";
import Button from "../../Components/Sub/Button";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import "./RegisterUpdate.css";
import "../../../App.css";

const RegisterUpdate = () => {
  const formAreas = [
    "Dados cadastrais",
    "Dados dos serviços contratados",
    "Equipe médica",
  ];
  const { updateRegisterForm, updateRegisterCheckbox } = GeneralForms();

  const [formInputs, setFormInputs] = React.useState(
    updateRegisterForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: field.value,
      };
    }, {})
  );
  const [checkbox, setCheckBox] = React.useState(
    updateRegisterCheckbox.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: field.value,
      };
    }, {})
  );

  const handleClick = ({ target }) => {
    target.classList.toggle("activeSphere");
  };

  const MapCircles = formAreas.map((field, index) => (
    <div key={field} className="div-main-field">
      <span onClick={handleClick} className="div-sub-into-field"></span>
      <label className="label-sub-field">{field}</label>
    </div>
  ));

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormInputs({ ...formInputs, [id]: value });
  };

  const handleChangeCheckBox = ({ target }) => {
    const { id, checked } = target;
    if (checked) {
   console.log(id)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(checkbox);
  };

  return (
    <>
      <div className="div-main-update-register pageView">
        <div className="div-title-pages">
          <Titledecorated text="Atualização Cadastral" />
        </div>
        <div className="border-division">{MapCircles}</div>

        <form className="form-update-register" onSubmit={handleSubmit}>
          <h1> Preencha os dados</h1>
          <div>
            {useInputsGeneral(updateRegisterForm, handleChange, formInputs)}
            {useInputsGeneral(
              updateRegisterCheckbox,
              handleChangeCheckBox,
              checkbox
            )}
          </div>
          <div>
            <Button value="Proximo" />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterUpdate;
