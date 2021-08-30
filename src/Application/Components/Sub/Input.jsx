import React from "react";
import InputMask from "react-input-mask";
import "./Input.css";
const Input = ({ ...props }) => {
  return (
    <>
      <label className={[" input-div " + props.className]}>
        {props.label}
        <div key={props.key}>
          <h1 className={props.error ? "p-input" : "p-error-null"}>
            {props.error}
          </h1>
          <InputMask
            type={props.type}
            onChange={props.onChange}
            onClick={props.onClick}
            mask={props.mask}
            maxLength={props.maxLength}
            title={props.title}
            pattern={props.pattern}
            required={props.require}
            value={props.value}
            id={props.id}
            onBlur={props.changeBlur}
            onFocus={props.changeFocus}
            placeholder={props.placeholder}
            className="input"
          />
          {/* {props.img ? (
            <img className="input-img" src={props.img} alt="Imagem de Icone" />
          ) : null} */}
          {props.type === "checkbox" ? (
            <span className="checkmark"></span>
          ) : null}
        </div>
      </label>
    </>
  );
};
export default Input;
