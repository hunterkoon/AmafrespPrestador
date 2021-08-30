import React from "react";
import infoIcon from "../../../Assets/infoIcon.svg";
import './Info.css'

const Info = ({...props}) => {
  return (
    <>
      { props.info ? (
        <>
          <img
            src={infoIcon}
            alt="Imagem de Icone"
            className={props.type === "checkbox" ? "info-check" : "info-img"}
          />
          <label className="info-label">
            <h5>{props.info}</h5>
          </label>
        </>
      ) : null}
    </>
  );
};

export default Info;
