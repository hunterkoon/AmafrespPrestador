import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import { GlobalContext } from "../../Main/GlobalContext";
import { json } from "./sub/Dados";
import UserChanges from "./sub/UserChanges";
import Title from "../../../Components/Sub/Title";
import user from "../../../../Assets/UserProfille.svg";
import { useNavigate } from "react-router";
import Trash from '../../../../Assets/Trash.svg'
import Tool from '../../../../Assets/Tool_yellow.svg'
import "./GerenciarUsuarios.css";

const GerenciarUsuarios = () => {
  const { toggleModal, setToggleModal } = React.useContext(GlobalContext);
  const [editUser, setEditUser] = React.useState();
  const [deleteUser, setDeleteUser] = React.useState();
  const navigate = useNavigate();

  const handleEdit = (profile) => {
    setToggleModal(!toggleModal)
    setEditUser({ profile: profile, open: true});
    setDeleteUser({ profile: profile, open: false});
  };

  const handleDelete = (profile) => {
    setToggleModal(!toggleModal)
    setDeleteUser({ profile: profile, open: true});
    setEditUser({ profile: profile, open: false});
  };

  const Employee = () => {
    return json.colaboradores.map((lista) => (
      <tr key={lista.id}>
        <td>{lista.pnome}</td>
        <td>{lista.cpf}</td>
        <td>{lista.pdepartamento}</td>
        <td>{lista.email}</td>
        <td>
          {Object.entries(lista.privilegios).map((item) => (
            <label key={`td${item[0]}`}>
              {item[1] !== "null" ? ` ${item[0]} /` : null}
            </label>
          ))}
        </td>
        <td className="table-td-edit" onClick={() => handleEdit(lista)}>
        <img src={Tool} width='35px' />
        </td>
        <td onClick={() => handleDelete(lista)} className="table-td-delete">
            <img src={Trash} width='25px' />
        </td>
      </tr>
    ));
  };

  return (
    <>
      <UserChanges user={editUser} deleteUser={deleteUser} />
      
      <div className="div-main-gerenciarUsuarios pageView">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
          <Title text={"Gerenciar usuários"} />
        </div>
        <div
          onClick={() => navigate("../AdicionarUsuarios")}
          className="div-add-new-user-mananger-users"
        >
          <img src={user} alt={"imagem usuário"} />
          Novo Usuário
        </div>
        <table className="table-list-users-mananger">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Setor</th>
              <th>Email</th>
              <th>Privilégios</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Employee />
          </tbody>
        </table>

      </div>
    </>
  );
};

export default GerenciarUsuarios;
