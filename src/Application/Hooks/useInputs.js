import React from "react";
import Input from "../Components/Sub/Input";

const useInputs = () => {
  const useInputsGeneral = (form, handleChange, state, classMain) => {
    return form.map(
      ({
        id,
        label,
        type,
        require,
        pattern,
        title,
        maxLength,
        mask,
        changeBlur,
        changeFocus,
        onChange,
        error,
        key,
        className,
        placeholder,
        onClick,
        img,
        info,
        value,
        name,
      }) => (
        <Input
          type={type}
          name={name}
          key={key}
          id={id}
          onChange={handleChange ? handleChange : onChange}
          error={error}
          label={label}
          img={img}
          mask={mask}
          maxLength={maxLength}
          title={title}
          pattern={pattern}
          require={require}
          value={state[id] ? state[id] : value}
          checked={state}
          changeBlur={changeBlur}
          changeFocus={changeFocus}
          placeholder={placeholder}
          onClick={onClick}
          info={info}
          className={classMain ? classMain : className}
        />
      )
    );
  };

  return { useInputsGeneral: useInputsGeneral };
};

export default useInputs;
