import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import "./GerenciarUsuarios.css";
import "../../../../App.css";
import { json } from "./Dados";
import UserChanges from "./UserChanges";

const GerenciarUsuarios = () => {
  const [selectecUser, setSelectedUser] = React.useState(null);

  const handleClick = (user) => {
    setSelectedUser(user)
  };

  const Colaborador = json.colaboradores.map((lista) => (
    <>
      <tr>
        <td>{lista.pnome}</td>
        <td>{lista.pdepartamento}</td>
        <td>{lista.email}</td>
        <td>
          {Object.entries(lista.privilegios).map((item) =>
            item[1] !== "null" ? ` ${item[0]} /` : null
          )}
        </td>
        <td>
          <div onClick={() => handleClick(lista)}>  Editar</div>
        </td>
      </tr>
    </>
  ));
  
  return (
    <>
    <UserChanges props={selectecUser}/>
      <div className="div-main-gerenciarUsuarios pageView">
        <div className="div-title-pages">
          <Titledecorated text="Gerênciar Usuários" />
        </div>

        <table className="table-list-users-mananger">
          <h1>Lista de Usúarios</h1>
          <tr>
            <th>Nome</th>
            <th>Setor</th>
            <th>Email</th>
            <th>Privilégios</th>
            <th></th>
          </tr>
          {Colaborador}
        </table>
      </div>
    </>
  );
};

export default GerenciarUsuarios;
