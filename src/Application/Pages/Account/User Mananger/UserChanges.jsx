import { react } from "@babel/types";
import React from "react";
import { useInputsGeneral } from "../../../Hooks/useInputs";
import GeneralForms from "../../../Shared/Forms/GeneralForms";
import Button from "../../../Components/Sub/Button";
import "./UserChanges.css";
const UserChanges = ({ ...props }) => {
  const [objProps, setObjProps] = React.useState(null);
  const [userSelectedForm, setUserSelectedForm] = React.useState([]);
  const { adjustsManangerUser } = GeneralForms(userSelectedForm);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUserSelectedForm({ ...userSelectedForm, [id]: value });
  };

  const handleSubmit = () => {
    console.log(userSelectedForm);
  };

  React.useEffect(() => {
    if (objProps !== null) {
      setUserSelectedForm(
        adjustsManangerUser.reduce((acc, field) => {
          return {
            ...acc,
            [field.id]: Object.entries(objProps)
              .map((item) => (item[0] === field.id ? item[1] : ""))
              .filter((str) => str !== "")
              .toString(),
          };
        }, {})
      );
    }
  }, [objProps]);

//   console.log(objProps && objProps.privilegios.map((item)=> item !== 'null' ))

  React.useEffect(() => {
    setObjProps(props.props);
  }, [props.props]);

  return (
    <div className="div-main-user-changes">
      <div className="div-sub-user-changes">
        {useInputsGeneral(adjustsManangerUser, handleChange, userSelectedForm)}
        <Button value="Alterar" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default UserChanges;
