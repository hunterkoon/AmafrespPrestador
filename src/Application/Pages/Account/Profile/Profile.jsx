import React from "react";
import Title from "../../../Components/Sub/Title";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import useInputs from "../../../Hooks/useInputs";
import GeneralForms from "../../../Shared/Forms/GeneralForms";
import Button from "../../../Components/Sub/Button";
import { GlobalContext } from "../../Main/GlobalContext";
import Succesfull from "../../../Components/Sub/Succesfull";
import useErrorForm from "../../../Hooks/useErrorForm";
import { adjustsProfileSubmit } from "../../../Hooks/useSubmitDada";
import { returnFilter } from "../../../Shared/Commons/Helpers/HandleFilter";
import Style from '../../Account/Add User/Forms.module.css'
import Error from '../../../Components/Sub/Error'
import "./Profile.css";



const Profile = () => {

  const { useInputsGeneral } = useInputs()
  const { alterRegisterData, setAlterRegisterData, data, _ChangeUserData, error, setError } = React.useContext(GlobalContext);
  const { adjustsUserForm } = GeneralForms(alterRegisterData);
  const [err, setErr] = React.useState(false);
  const UserSubmit = adjustsProfileSubmit(alterRegisterData)

  const [adjustsByUser, setAdjustsByUser] = React.useState(
    adjustsUserForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: returnFilter(data, field),
      };
    }, {})
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setAdjustsByUser({ ...adjustsByUser, [id]: value });
  };

  React.useEffect(() => {
    setAlterRegisterData({ ...adjustsByUser });
  }, [adjustsByUser, setAlterRegisterData]);
  const erroForm = useErrorForm(adjustsUserForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (erroForm) {
      _ChangeUserData(UserSubmit);
      setErr(true);
    }
    //TODO FETCH FUNCTION
  };
  return (
    <div className="div-main-perfil pageView">
      <div className="div-title-pages">
        <Titledecorated text="Meu Perfil" />
        <Title text="Ajustes" />
      </div>
      <div className="div-sub-adjusts-user-data">
        <form className="form-adjusts-use" onSubmit={handleSubmit}>
          <h1> Alteração de dados.</h1>
          <div className={Style.form}>
            {useInputsGeneral(adjustsUserForm, handleChange, adjustsByUser)}
          </div>
          <div className="div-sub-adjusts-user-button-area">
            <Button value="Alterar" />
          </div>
        </form>
      </div>

      <Succesfull
        onClick={() => [setErr(!err), setError(null)]}
        alert={err}
        text={error ? error : 'Infomações pessoais alteradas!.'}
        error={error}
      />
    </div>
  );
};

export default Profile;
