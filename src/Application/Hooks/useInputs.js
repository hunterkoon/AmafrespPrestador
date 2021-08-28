import Input from "../Components/Sub/Input";

export const useInputsGeneral = (
  form,
  handleChange,
  state,
  classMain
) => {
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
      checked,
      changeBlur,
      changeFocus,
      error,
      key,
      className,
      placeholder,
      onClickDiv,
      img,
    }) => (
      <Input
        type={type}
        key={key}
        id={id}
        onChange={handleChange}
        error={error}
        label={label}
        img={img}
        mask={mask}
        maxLength={maxLength}
        title={title}
        pattern={pattern}
        require={require}
        value={state && state[id]}
        checked={checked}
        changeBlur={changeBlur}
        changeFocus={changeFocus}
        placeholder={placeholder}
        onClickDiv={onClickDiv}
        className={classMain ? classMain : className}
      />
    )
  );
};
