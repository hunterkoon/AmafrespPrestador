import { React, useEffect, useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { loginOptions } from "../Shared/Commons/constant/switch-button-options";
import SwitchSelector from "react-switch-selector";
import "./Modal.css";

const Modal = () => {
  const { setOption, option } = useContext(GlobalContext);
  const [state, setState] = useState('1');

  const initialSelectedIndex = loginOptions.findIndex(
    ({ value }) => value === "common"
  );

  const handleIndexChange = (event) => {

    if (event === "adm") {
      setState("0");
    } else {
      setState("1");
    }
  };

  useEffect(() => {
    console.log("passou aqui");
    const handleChangeModal = () => {
      if (state === "1") {
        setOption(true);
      } else setOption(false);
    };
    handleChangeModal();

  }, [state]);

  return (
    <div className="div-main-modal">
      <div className="div-modal">
        <SwitchSelector
          onChange={handleIndexChange}
          options={loginOptions}
          backgroundColor="#f4f4f4"
          initialSelectedIndex={initialSelectedIndex}
          //   forcedSelectedIndex="0"
        />
        <h1>Selecione uma Categoria</h1>
      </div>
    </div>
  );
};

export default Modal;
