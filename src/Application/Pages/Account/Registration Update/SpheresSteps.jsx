import React from "react";
import "./SpheresSteps.css";

const SpheresSteps = ({ ...props }) => {
  const formAreas = ["Dados cadastrais", "Endereços", "Contatos"];
  // const [className, setClassName] = React.useState("div-sub-into-field");

  const MapCircles = formAreas.map((field, index) => (

    <div key={field} className="div-main-field">
      <span className={`div-sub-into-field`}></span>
      <label className="label-sub-field">{field}</label>
    </div>
  ));

  React.useEffect(() => {
    const handleChange = (e) => {
      let steps = props.steps;
      if (steps < 3) {
       
        return  MapCircles
      }
    };
    console.log(handleChange());

  }, [MapCircles, props.steps]);

  return <div className="border-division">{MapCircles}</div>;
};

export default SpheresSteps;
