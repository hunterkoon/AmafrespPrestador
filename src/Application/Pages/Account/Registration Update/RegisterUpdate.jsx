import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import { useInputsGeneral } from "../../../Hooks/useInputs";
import Button from "../../../Components/Sub/Button";
import GeneralForms from "../../../Shared/Forms/GeneralForms";
import { GlobalContext } from "../../Main/GlobalContext";
import Load from "../../../Components/Sub/Load";
import SpheresSteps from "./SpheresSteps";
import "./RegisterUpdate.css";
import "../../../../App.css";

const RegisterUpdate = () => {
  const { setRegUpData, loading, regUpData } = React.useContext(GlobalContext);
  const { upRegFormRegisterData } = GeneralForms(regUpData);
  let [steps, setSteps] = React.useState(0);

  const [formInputs, setFormInputs] = React.useState(
    upRegFormRegisterData.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: field.value,
      };
    }, {})
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormInputs({ ...formInputs, [id]: value });
  };

  const handleSubmit = (event) => {
    return null;
  };

  React.useEffect(() => {
    const resetSteps = () => {
      if (steps >= 3) {
        setSteps(0);
      }
    };
    resetSteps();
    setRegUpData(formInputs);
  }, [formInputs, setRegUpData, steps]);

  return (
    <>
      <Load load={loading} />
      <div className="div-main-update-register pageView">
        <div className="div-title-pages">
          <Titledecorated text="Atualização Cadastral" />
        </div>
        <SpheresSteps steps={steps} />

        <form className="form-update-register" onSubmit={handleSubmit}>
          <h1> Preencha os dados</h1>
          {useInputsGeneral(upRegFormRegisterData, handleChange, formInputs)}
          <Button onClick={() => setSteps(steps + 1)} value="Proximo" />
        </form>
      </div>
    </>
  );
};

export default RegisterUpdate;
