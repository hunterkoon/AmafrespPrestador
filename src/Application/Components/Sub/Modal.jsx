import React from "react";
import Title from "./Title";
import Titledecorated from "./Titledecorated";
import { GlobalContext } from "../../Pages/Main/GlobalContext";
import "./Modal.css";
const Modal = ({ ...props }) => {
  const { msgDataChanges } = React.useContext(GlobalContext);
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
              <Title text={props.disclaimer} />
              <Title text={props.text} />
              <h3> {!props.error ? msgDataChanges && msgDataChanges : null} </h3>
            </div>
            <div onClick={props.disclaimer ? null : () => refreshPage()}>
              <div className="div-close-modal" onClick={props.onClick}>
                <span>x</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
