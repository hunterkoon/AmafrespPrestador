import React from "react";
import { GlobalContext } from "../../Pages/Main/GlobalContext";
import "./Button.css";

const Button = ({ ...props }) => {
  const { loading } = React.useContext(GlobalContext);
  return (
    <button
      type={props.type}
      className={`button-shared ${props.class}`}
      style={{
        backgroundColor: props.color,
        color: props.textColor,
        fontWeight: "bolder",
      }}
      onClick={props.onClick}
    >
      {loading ? "Carregando..." : props.value}
    </button>
  );
};

export default Button;
