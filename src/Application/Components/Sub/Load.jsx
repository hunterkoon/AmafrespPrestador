import React from "react";
import loadingIMG from "../../../Assets/Loading.gif";
import "./Load.css";

const Load = ({ ...props }) => {
  return (
    <>
      {props.load ? (
        <div className="div-main-load">
          <div className="div-sub-load">
            <img
              src={loadingIMG}
              className="input-img-load"
              alt="loading Gif"
            />
            <labe> Carregando, aguarde ... </labe>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Load;
