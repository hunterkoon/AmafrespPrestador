import React from "react";
import InputMask from "react-input-mask";
import CheckboxStyle from "../../Shared/Commons/Constants/CheckboxStyle";
import "./Input.css";

const Input = ({ ...props } ) => {

  const{checkboxStyleChildren} = CheckboxStyle()  
  
  return (
    <div key={props.key} className={[" input-div " + props.className]}>
      <label htmlFor={props.id}>{props.label}</label>
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
        style={{
          width: props.width,
        }}
        id={props.id}
        onBlur={props.changeBlur}
        onFocus={props.changeFocus}
        placeholder={props.placeholder}
        className="input"
      />
   { props.img ?  <img style={checkboxStyleChildren} src={props.img} alt="Imagem de Icone" /> : null}   
    </div>
  );
};

export default Input;
