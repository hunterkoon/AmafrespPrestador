import React from "react";
import Titledecorated from "./Titledecorated";
import Seta from "../../../Assets/Seta_Verde.svg";
import "./HelperText.css";

const HelperText = ({ ...props }) => {
  const [handle, setHandle] = React.useState(false);

  const handleClick = (e) => {
    if (e.target.tagName === "H1") {
      setHandle(!handle);
    }
  };

  return (
    <div onClick={handleClick} className="div-helper-component-main">
      <div className='div-main-text-img-helperText'>
        <Titledecorated
          textDecoration={handle ? "underline" : "none"}
          cursor="pointer"
          size="1.6em"
          text={props.title}
        />
        <img style={{
          transform: handle ? 'rotate(180deg)' : null
        }} className="img-helpText" src={Seta} alt="" />
      </div>

      <h4 className={handle ? "active-help" : "deactived-help"}>
        {props.children}
      </h4>
    </div>
  );
};

export default HelperText;
