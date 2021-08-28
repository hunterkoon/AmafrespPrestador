import React from "react";
import { GlobalContext } from "../../../Pages/Main/GlobalContext";
import GeneralForms from "../../Forms/GeneralForms";

const CheckboxStyle = (event) => {
  const { newUserData } = React.useContext(GlobalContext);

  const obj = newUserData;

  const ObjEntries = Object.entries(obj);

  const filtred = ObjEntries.map((item) => ({
    key: item[0],
    value: item[1],
  }));

  const finish = () =>{
    for(let i  in filtred){
        return filtred[0] && filtred[i]
    }

  }



  const checkboxStyleChildren = {
    opacity: "1",
    position: "absolute",
    marginTop: "5%",
  };
  return {
    checkboxStyleChildren: checkboxStyleChildren,
  };
};

export default CheckboxStyle;
