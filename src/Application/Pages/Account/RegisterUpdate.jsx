import React from "react";
import Titledecorated from "../../Components/Sub/Titledecorated";
import { useInputsGeneral } from "../../Hooks/useInputs";
import Button from "../../Components/Sub/Button";
import GeneralForms from "../../Shared/Forms/GeneralForms";
import { upRegAddressSubmit } from "../../Hooks/useSubmitDada";
import { GlobalContext } from "../Main/GlobalContext";
import "./RegisterUpdate.css";
import "../../../App.css";

const RegisterUpdate = () => {
  const { setRegUpData } = React.useContext(GlobalContext);
  const formAreas = [
    "Dados cadastrais",
    "Dados dos serviços contratados",
    "Equipe médica",
  ];
  const [regUp , setRegUp ] = React.useState([])
  const { upRegFormAddress, upRegCBXAddress } = GeneralForms(regUp);
  
 const [formInputs, setFormInputs] = React.useState(
    upRegFormAddress.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: field.value,
      };
    }, {})
  );
  const [checkbox, setCheckBox] = React.useState(
    upRegCBXAddress.reduce((acc, field) => {
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
    setRegUp({ ...formInputs, [id]: value });
  };

  const handleChangeCheckBox = ({ target }) => {
    const { id, checked } = target;
    if (checked) {
      console.log(id, checked);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(checkbox);
  };

  React.useEffect(() => {
    setRegUpData(upRegAddressSubmit(regUp));
  }, [formInputs, regUp, setRegUpData]);

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
            {useInputsGeneral(upRegFormAddress, handleChange, regUp)}
            {useInputsGeneral(upRegCBXAddress, handleChangeCheckBox, checkbox)}
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
