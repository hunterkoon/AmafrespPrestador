import React from "react";
import Title from "./Title";
import Titledecorated from "./Titledecorated";
import { GlobalContext } from "../../Pages/Main/GlobalContext";
import "./Succesfull.css";
const Succesfull = ({ ...props }) => {
  const { dadosAlterados } = React.useContext(GlobalContext);
  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      {props.alert ? (
        <div className="main-modal">
          <div className="div-main-successfull">
            <div className="div-titles-successfull">
              <Titledecorated text={props.error ? "Falha :( " : "Sucesso!!!"} />
              <Title text={props.text} />
              <h3> {!props.error ? dadosAlterados && dadosAlterados : null} </h3>
            </div>
            <div className="div-close-modal" onClick={props.onClick}>
              <span onClick={() => refreshPage()}>x</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Succesfull;
