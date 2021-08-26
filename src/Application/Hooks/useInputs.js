import Input from "../Components/Sub/Input"

export const useInputsGeneral = (form , value , handleChange, classMain) => 
{
 return form.map(
        ({ id, label, type, require, pattern, title, maxLength, mask, changeBlur, changeFocus, error, key, className }) => (
          
          <Input
            error = {error}
            mask={mask}
            key={key}
            maxLength={maxLength}
            title={title}
            pattern={pattern}
            label={label}
            type={type}
            id={id}
            require={require}
            value={value[id]}
            changeBlur={changeBlur}
            changeFocus={changeFocus}
            onChange={handleChange}
            className={classMain ? classMain : className }
          
          />
        ),
      )
}