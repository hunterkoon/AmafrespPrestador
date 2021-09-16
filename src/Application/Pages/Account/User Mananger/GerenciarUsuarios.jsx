import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import { json } from "./sub/Dados";
import UserChanges from "./sub/UserChanges";
import { GlobalContext } from "../../Main/GlobalContext";
import "./GerenciarUsuarios.css";

const GerenciarUsuarios = () => {
  const { toggleModal, setToggleModal } = React.useContext(GlobalContext);
  const [editUser, setEditUser] = React.useState(null);
  const [deleteUser, setDeleteUser] = React.useState(null);

  const handleEdit = (profile) => {
    setToggleModal(!toggleModal);
    if(deleteUser !== null){
      setDeleteUser(null)
    }
    setEditUser(profile);
  };

  const handleDelete = (profile) => {
    setToggleModal(!toggleModal);
    if (editUser !== null) {
      setEditUser(null);
    }
    setDeleteUser(profile);
  };

  const Employee = () => {
    return json.colaboradores.map((lista) => (
      <tr key={lista.id}>
        <td>{lista.pnome}</td>
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
          Editar
        </td>
        <td onClick={() => handleDelete(lista)} className="table-td-delete">
          Excluir
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="div-main-gerenciarUsuarios pageView">
        <div className="div-title-pages">
          <Titledecorated text="Gerênciar Usuários" />
        </div>
        <UserChanges user={editUser} deleteUser={deleteUser} />
        <table className="table-list-users-mananger">
          <thead>
            <tr>
              <th>Nome</th>
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
