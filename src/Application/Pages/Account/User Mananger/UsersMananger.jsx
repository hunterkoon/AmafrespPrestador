//#region  IMPORTS

import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import { GlobalContext } from "../../Main/GlobalContext";
import UserChanges from "./sub/UserChanges";
import Title from "../../../Components/Sub/Title";
import user from "../../../../Assets/UserProfille.svg";
import { useNavigate } from "react-router";
import Tool from "../../../../Assets/Tool_Green.svg";
import Tool_Grey from "../../../../Assets/Tool_Grey.svg";
import Nobody from "../../../../Assets/Nobody.gif";
import Modal from "../../../Components/Sub/Modal";
import { dadosMock } from "./sub/Dados";
import "./UsersMananger.css";

//#endregion

const UsersMananger = () => {

  //#region ESTADOS
  const { toggleModal, setToggleModal, users, changeData, data, manangeUsers, addNewUser, admin } = React.useContext(GlobalContext);
  const [editUser, setEditUser] = React.useState();
  const [deleteUser, setDeleteUser] = React.useState();
  const [toggleStatus, setToggleStatus] = React.useState();
  const [list, setList] = React.useState(true);
  const navigate = useNavigate();
  const [initial, setInitial] = React.useState(0);
  const [finish, setFinish] = React.useState(4);
  const [userList, setUserList] = React.useState([]);

  //#endregion

  //#region HANDLE NAVIGATE

  // React.useEffect(() => {
  //   return manangeUsers || admin ? null : navigate('/conta');
  // }, [manangeUsers, navigate])

  //#endregion

  //#region EFFECT LISTS
  // React.useEffect(() => {
  //   if (manangeUsers || admin)
  //     users.map((lista) => lista?.idUsuario != data.idUsuario && lista?.admin != true ?
  //       setList(true) : setList(false)
  //     )
  // }, [data, users])
  //#endregion

  //#region HANDLE EDITS 
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

  let pages = parseInt(dadosMock.length / 5)
  let rest = pages % 2

  React.useEffect(() => {
    // setFinish(finish + 4);
    setUserList(dadosMock.filter((element, index, arr) => {
      if (index >= initial && index <= finish) {
        return element
      }
    }))
    console.log(initial, finish)
  }, [initial, finish])

  const Pagination = () => {
    return dadosMock.map((items, index) =>
      index < pages + rest ?
        <h1 onClick={(e) => [setInitial(parseInt(e.target.innerText) * 5)]}
          Style="border: 1px solid red; width:30px; text-align:center; cursor:pointer;">{index}</h1>
        : null)
  }

  //#endregion

  //#region  USUÁRIOS
  const Employee = () => {
    let n = 0;
    return userList && userList.map((lista, index) => (
      lista?.idUsuario ?
        (
          <tr key={lista?.idUsuario}>
            {/* <td>{index}</td> */}
            <td>{lista?.nome}</td>
            <td>{lista?.cpf}</td>
            <td>{lista?.setor}</td>
            <td>{lista?.email}</td>

            <td>
              {Object.entries(lista?.Funcionalidades).map((item) =>
                <label key={n++}> {
                  item?.[1] === null
                    ? <span style={{ fontSize: "0.80em" }}>  Nenhuma Funcionalidade </span>
                    : <span style={{ fontSize: "0.80em" }}>  - {item[1]?.nome} </span>
                } < br />
                </label>
              )}
            </td>
            <td className={lista?.ativo ? "active-tag" : "inative-tag"} >
              {lista?.ativo ?
                <h1>Ativo</h1> :
                <h1>Inativo</h1>}
            </td>
            {/* editar */}
            <td className="table-td-edit" onClick={() => lista?.ativo ? handleEdit(lista) : setToggleStatus(!toggleStatus)}>
              <img src={lista?.ativo ? Tool : Tool_Grey} className="tool-img" alt="ferramenta" />
            </td>
            {/* ativa/desativar */}
            <td onClick={() => handleDelete(lista)} className="table-td-delete">
              {!lista?.ativo ? "Ativar" : "Inativar"}
            </td>
          </tr>
        )
        : null
    ))
  };
  //#region 
  // const Employee = () => {
  //   let n = 0;
  //   return users.map((lista) => (
  //     lista?.idUsuario != data.idUsuario && lista?.admin != true ?
  //       (
  //         <tr key={lista?.idUsuario}>
  //           <td>{lista?.nome}</td>
  //           <td>{lista?.cpf}</td>
  //           <td>{lista?.setor}</td>
  //           <td>{lista?.email}</td>

  //           <td>
  //             {Object.entries(lista?.Funcionalidades).map((item) =>
  //               <label key={n++}> {
  //                 item?.[1] === null
  //                   ? <span style={{ fontSize: "0.80em" }}>  Nenhuma Funcionalidade </span>
  //                   : <span style={{ fontSize: "0.80em" }}>  - {item[1]?.nome} </span>
  //               } < br />
  //               </label>
  //             )}
  //           </td>
  //           <td className={lista?.ativo ? "active-tag" : "inative-tag"} >
  //             {lista?.ativo ?
  //               <h1>Ativo</h1> :
  //               <h1>Inativo</h1>}
  //           </td>
  //           {/* editar */}
  //           <td className="table-td-edit" onClick={() => lista?.ativo ? handleEdit(lista) : setToggleStatus(!toggleStatus)}>
  //             <img src={lista?.ativo ? Tool : Tool_Grey} className="tool-img" alt="ferramenta" />
  //           </td>
  //           {/* ativa/desativar */}
  //           <td onClick={() => handleDelete(lista)} className="table-td-delete">
  //             {!lista?.ativo ? "Ativar" : "Inativar"}
  //           </td>
  //         </tr>
  //       ) : null));
  // };
  //#endregion
  //#endregion
  //#region INTERFACE

  React.useEffect(() => {
    if (manangeUsers || admin) {
      const indexAltered = users.findIndex((user) => {
        return user.idUsuario === changeData.UsersSubmit?.IdUsuario
      })
      if (users[indexAltered] && changeData) {
        users[indexAltered].nome = changeData.UsersSubmit?.Nome;
        users[indexAltered].email = changeData.UsersSubmit?.Email;
        users[indexAltered].cpf = changeData.UsersSubmit?.Cpf;
        users[indexAltered].setor = changeData.UsersSubmit?.Departamento;
        users[indexAltered].celular = changeData.UsersSubmit?.Celular;
        users[indexAltered].Funcionalidades = changeData.UsersSubmit?.Funcionalidades;
        users[indexAltered].ativo = changeData?.Status;
      }
      Employee();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeData, setToggleModal])

  //#endregion

  return (
    <>
      <Modal
        error={true}
        alert={toggleStatus}
        disclaimer={"Ative este usuário para edita-lo"}
        onClick={() => setToggleStatus(!toggleStatus)} />

      <UserChanges
        user={editUser}
        deleteUser={deleteUser}
      />


      <div className="div-main-gerenciarUsuarios pageView">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
          <Title text={"Gerenciar usuários"} />
        </div>

        {addNewUser ?
          <div
            onClick={() => navigate("../AdicionarUsuarios")}
            className="div-add-new-user-mananger-users"
          >
            <img src={user} alt={"imagem usuário"} />
          Novo Usuário
        </div> : null}
        {list ?
          <table className="table-list-users-mananger">
            <thead>
              <tr>
                {/* <th>Id</th> */}
                <th>Nome</th>
                <th>CPF</th>
                <th>Setor</th>
                <th>Email</th>
                <th>Privilégios</th>
                <th>Status</th>
                <th>Editar</th>
                <th>Ativar/Inativar</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "0.9em" }}>{users && Employee()}</tbody>
          </table> :
          <div className="div-sub-nobody">
            <h1>Nenhum Usuário</h1>
            <p>Adicione usuários para gerenciar!</p>
            <img src={Nobody} alt={"hands down"} />
          </div>}
        <div Style="display:flex;">
          <Pagination initial={3} finish={4} />
        </div>
      </div>
    </>
  );
};

export default UsersMananger;
