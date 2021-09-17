import React from "react";
import Button from "./Button";
import Title from "./Title";
import Titledecorated from "./Titledecorated";
import "./Succesfull.css";
const Succesfull = ({ ...props }) => {


  return (
    <>
      {props.alert ? <div className="main-modal"  >
        <div className="div-main-successfull">
        <div className="div-titles-successfull">
            <Titledecorated text="Sucesso!!!" />
            <Title text={props.text} />
          </div>
          <div className="div-close-modal" onClick={props.onClick}>
            <span>x</span>
          </div>
        </div>
      </div>
        : null}
    </>
  );
};

export default Succesfull;
