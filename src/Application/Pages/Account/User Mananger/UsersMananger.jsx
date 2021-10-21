import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import { GlobalContext } from "../../Main/GlobalContext";
import { json } from "./sub/Dados";
import UserChanges from "./sub/UserChanges";
import Title from "../../../Components/Sub/Title";
import user from "../../../../Assets/UserProfille.svg";
import { useNavigate } from "react-router";
import Trash from "../../../../Assets/Trash.svg";
import Tool from "../../../../Assets/Tool_yellow.svg";
import "./UsersMananger.css";

const UsersMananger = () => {



  const { toggleModal, setToggleModal, users, changeData } = React.useContext(GlobalContext);
  const [editUser, setEditUser] = React.useState();
  const [deleteUser, setDeleteUser] = React.useState();
  const navigate = useNavigate();

  // Interface
  React.useEffect(() => {
    const indexAltered = users.findIndex((user) => { return user.idUsuario === changeData.idUsuario })
    if (users[indexAltered] && changeData) {
      users[indexAltered].nome = changeData?.Nome;
      users[indexAltered].email = changeData?.Email;
      users[indexAltered].cpf = changeData?.Cpf;
      users[indexAltered].setor = changeData?.Departamento;
      users[indexAltered].celular = changeData?.Celular;
    }
    Employee()
  }, [users, setToggleModal, changeData])

  const handleEdit = (profile) => {
    setToggleModal(!toggleModal);
    setEditUser({ profile: profile, open: true });
    setDeleteUser({ profile: profile, open: false });
  };

  const handleDelete = (profile) => {
    setToggleModal(!toggleModal);
    setDeleteUser({ profile: profile, open: true });
    setEditUser({ profile: profile, open: false });
  };

  const Employee = () => {

    return users && users.map((lista) => (
      <tr key={lista?.idUsuario}>
        <td>{lista?.nome}</td>
        <td>{lista?.cpf}</td>
        <td>{lista?.setor}</td>
        <td>{lista?.email}</td>
        <td style={{ fontSize: "0.8em" }}>
          {lista && Object.entries(lista?.Funcionalidades).map((item) =>
            item[1] != null ? (
              <label key={item[1].idFuncionalidade} style={{ fontSize: "0.8rem" }}>
                *{item[1].nome.toString()} <br />
              </label>
            ) : (
                "Sem Função"
              )
          )}
        </td>
        <td className="table-td-edit" onClick={() => handleEdit(lista)}>
          <img src={Tool} className="tool-img" alt="ferramenta" />
        </td>
        <td onClick={() => handleDelete(lista)} className="table-td-delete">
          <img src={Trash} className="trash-img" alt="lixeirinha" />
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
          <tbody>{users && <Employee />}</tbody>
        </table>
      </div>
    </>
  );
};

export default UsersMananger;
