/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
// import { serverError } from "../../../Shared/Commons/Constants/Errors";
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
import Input from "../../../Components/Sub/Input";
import "./UsersMananger.css";

//#endregion

//#region ESTADOS
const UsersMananger = () => {
  const {
    toggleModal,
    setToggleModal,
    users,
    changeData,
    data,
    manangeUsers,
    addNewUser,
    admin,
  } = React.useContext(GlobalContext);
  const [editUser, setEditUser] = React.useState();
  const [deleteUser, setDeleteUser] = React.useState();
  const [toggleStatus, setToggleStatus] = React.useState();
  const [list, setList] = React.useState(true);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = React.useState(0);
  const [finish, setFinish] = React.useState(0);
  const [pagesState, setPagesState] = React.useState([]);
  const [userList, setUserList] = React.useState([]);
  const [initialIndexItem, setInitialIndexItem] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  //#endregion

  //#region HANDLE NAVIGATE

  React.useEffect(() => {
    return manangeUsers || admin ? null : navigate("/conta");
  }, [manangeUsers, navigate]);

  //#endregion

  //#region EFFECT LISTS
  React.useEffect(() => {
    if (manangeUsers || admin)
      users.map((lista) =>
        lista?.idUsuario != data.idUsuario && lista?.admin != true
          ? setList(true)
          : setList(false)
      );
  }, [data, users]);
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
  //#endregion

  //#region HANDLE PAGINATION/SEARCH
  const handlePages = () => {
    const total = users && users.length;
    const limit = 5;
    const totalPages = Math.ceil(total / limit);
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }
    return setPagesState(pages);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toUpperCase());
    setUserList(
      searchValue.length >= 1
        ? users.filter((element) => element.nome.includes(searchValue))
        : users.filter(
          (item, index) => index >= initialIndexItem && index <= finish
        )
    );
    return searchValue.length >= 1 ? setPagesState(null) : handlePages();
  };

  const FinishResult = () => {
    return (
      <h1> {!userList.length == 0 ? null : "Nenhum resultado encontrado!."}</h1>
    );
  };

  const Pagination = () => {
    return (
      pagesState &&
      pagesState.map((items, index) => (
        <h1
          key={items}
          onClick={(e) => [setCurrentPage(parseInt(e.target.innerText))]}
          className="h1-pagination"
        >
          {items}
        </h1>
      ))
    );
  };

  React.useEffect(() => {
    handlePages();
    const initial = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    setFinish(initial[currentPage] + 4);
    setInitialIndexItem(initial[currentPage]);
    setUserList(
      users &&
      users.filter(
        (item, index) => index >= initialIndexItem && index <= finish
      )
    );
  }, [currentPage, initialIndexItem]);

  //#endregion

  //#region  USUÁRIOS

  const NewUser = () => {
    {
      return addNewUser ? (
        <div
          onClick={() => navigate("../AdicionarUsuarios")}
          className="div-add-new-user-mananger-users"
        >
          <img src={user} alt={"imagem usuário"} />
      Novo Usuário
        </div>
      ) : null
    }
  }
  const Employee = () => {
    let n = 0;
    return userList?.map((lista, index) =>
      lista?.idUsuario != userList.idUsuario && lista?.admin != true ? (
        <tr className="pageView" key={lista?.idUsuario}>
          {/* <td>{index}</td> */}
          <td>{lista?.nome}</td>
          <td>{lista?.cpf}</td>
          <td>{lista?.setor}</td>
          <td>{lista?.email}</td>

          <td>
            {Object.entries(lista?.Funcionalidades).map((item) => (
              <label key={n++}>
                {item?.[1] === null ? (
                  <span style={{ fontSize: "0.80em" }}></span>
                ) : (
                    <span style={{ fontSize: "0.80em" }}>- {item[1]?.nome}</span>
                  )}
                <br />
              </label>
            ))}
          </td>
          <td className={lista?.ativo ? "active-tag" : "inative-tag"}>
            {lista?.ativo ? <h1>Ativo</h1> : <h1>Inativo</h1>}
          </td>
          {/* editar */}
          <td
            className="table-td-edit"
            onClick={() =>
              lista?.ativo ? handleEdit(lista) : setToggleStatus(!toggleStatus)
            }
          >
            <img
              src={lista?.ativo ? Tool : Tool_Grey}
              className="tool-img"
              alt="ferramenta"
            />
          </td>
          {/* ativa/desativar */}
          <td onClick={() => handleDelete(lista)} className="table-td-delete">
            {!lista?.ativo ? "Ativar" : "Inativar"}
          </td>
        </tr>
      ) : null
    );
  };

  //#endregion

  //#region INTERFACE

  React.useEffect(() => {
    if (manangeUsers || admin) {
      const indexAltered = users.findIndex((user) => {
        return user.idUsuario === changeData.UsersSubmit?.IdUsuario;
      });
      if (users[indexAltered] && changeData) {
        users[indexAltered].nome = changeData.UsersSubmit?.Nome;
        users[indexAltered].email = changeData.UsersSubmit?.Email;
        users[indexAltered].cpf = changeData.UsersSubmit?.Cpf;
        users[indexAltered].setor = changeData.UsersSubmit?.Departamento;
        users[indexAltered].celular = changeData.UsersSubmit?.Celular;
        users[indexAltered].Funcionalidades =
          changeData.UsersSubmit?.Funcionalidades;
        users[indexAltered].ativo = changeData?.Status;
      }
      Employee();
    }
  }, [changeData, setToggleModal]);

  //#endregion

  return (
    <>
      <Modal
        error={true}
        alert={toggleStatus}
        disclaimer={"Ative este usuário para edita-lo"}
        onClick={() => setToggleStatus(!toggleStatus)}
      />

      <UserChanges user={editUser} deleteUser={deleteUser} />

      <div className="div-main-gerenciarUsuarios pageView">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
          <Title text={"Gerenciar usuários"} />
        </div>
        <div className="div-search-user">
          <div className="div-search">
            <Input
              id="input-search"
              placeholder="Buscar por nome"
              onChange={(e) => handleSearch(e)}
              value={searchValue}
            />
          </div>
          <NewUser />
        </div>

        {list ? (
          <table className="table-list-users-mananger pageView">
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
          </table>
        ) : (
            <div className="div-sub-nobody">
              <h1>Nenhum Usuário</h1>
              <p>Adicione usuários para gerenciar!</p>
              <img src={Nobody} alt={"hands down"} />
            </div>
          )}
        <div className="div-pagination">
          <Pagination />
          <FinishResult />
        </div>
      </div>
    </>
  );
};

export default UsersMananger;
