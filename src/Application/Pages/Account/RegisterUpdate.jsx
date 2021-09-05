import React from "react";
import Titledecorated from "../../Components/Sub/Titledecorated";
import "./RegisterUpdate.css";
import "../../../App.css";

const RegisterUpdate = () => {
  const [textHide, setTextHide] = React.useState(Boolean);
  const [fields, setFields] = React.useState([
    "Dados Cadastrais",
    "Dados dos serviços contratados",
    "Equipe médica",
    "",
    "",
  ]);

  const handleClick = ({ target }) => {
    target.classList.toggle("activeSphere");
    setTextHide(!textHide);
  };
  const MapCircles = fields.map((field, index) => (
    <div onClick={handleClick} key={index} className="div-sub-into-field">
      {field}
    </div>
  ));

  return (
    <>
      <div className="div-main-RegisterUpdate pageView">
        <div className="div-title-pages">
          <Titledecorated text="Atualização Cadastral" />
        </div>
        <div className="div-sub-field-register-update">
          <div className="border-division" />
          {MapCircles}
        </div>
      </div>
    </>
  );
};

export default RegisterUpdate;
