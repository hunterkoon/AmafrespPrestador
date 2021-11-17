//#region IMPORTS

import React from "react";
import useWindowDimensions from "../../Hooks/UseDimensionScreen";
import { useNavigate } from "react-router";
import useFetch from "../../Hooks/useFetch";
// import { ApiCep } from '../../Shared/Commons/Constants/RoutesApis';
import {
  LOGIN,
  AUTO_LOGIN,
  RECOVER_PASSWORDD,
  FIRST_ACESS,
  FREE_ACESS,
  CHANGE_PROFILE,
  GET_USER,
  ADD_USER,
  DEACTIVE_USER,
} from "./Api";
import { serverError } from "../../Shared/Commons/Constants/Errors";
import { handlePasswordHash } from "../../Shared/Commons/Helpers/HandleInputs";
import { removeCookies } from "../../Hooks/useRemoveCookies";

//#endregion

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

  //#region ESTADOS GLOBAIS

  const navigate = useNavigate();
  const [toggleModal, setToggleModal] = React.useState(false);
  const [globalHandle, setGlobalHandle] = React.useState(null);
  const [alterRegisterData, setAlterRegisterData] = React.useState([]);
  const [newUserData, setNewUserData] = React.useState([]);
  const [firtAcessData, setFirtAcessData] = React.useState([]);
  const [recoverData, setRecoverData] = React.useState([]);
  const [loginData, setLoginData] = React.useState([]);
  const [option, setOption] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [animateMenu, setAnimateMenu] = React.useState(false);
  const [address, setAdress] = React.useState([]);
  const { width, height } = useWindowDimensions();
  const { loading, error, request, setError } = useFetch();

  //FETCH ESTADOS

  const [CNPJCPF, setCNPJCPF] = React.useState(localStorage.getItem("codigo" && "codigo"));
  const [TOKEN, setToken] = React.useState(localStorage.getItem("token" && "token"));

  const [msgDataChanges, setMsgDataChanges] = React.useState(""); // Seta mensagens do back
  const [data, setData] = React.useState({}); // Recebe dados Login
  const [users, setUsers] = React.useState([]); // recebe Usuarios do sistema

  //INTERFACES

  const [changeData, setChangeData] = React.useState({}); // Interface

  // ATUALIZAÇÃO CADASTRAL
  const [regUpData, setRegUpData] = React.useState([]);

  //FUNCIONALIDADES

  const [admin, setAdmin] = React.useState(false); // Gerenciar Usuarios
  const [manangeUsers, setManangeUsers] = React.useState(false); // Gerenciar Usuarios
  const [addNewUser, setAddNewUser] = React.useState(false); // Adicionar novos Usuarios
  const [showPriceTable, setShowPriceTable] = React.useState(false); // Visualizar tabela de preços

  //#region  FETCHS DATA

  // FETCH EDNE CEP
  // React.useEffect(() => {
  //   async function GetCep() {
  //     const cep = ApiCep(regUpData.cep);
  //     if (regUpData.cep && regUpData.cep.length === 8) {
  //       const { json /*response */ } = await request(cep);
  //       setAdress(json);
  //     }
  //   }
  //   GetCep();
  // }, [regUpData.cep, request]);

  //login

  async function _Login(obj) {
    const { url, options } = LOGIN(obj);
    const { response, json } = await request(url, options);
    if (response != undefined) {
      if (response.status === 200) {
        let dados = json.Content;
        setLogin(true);
        setData(json.Content);
        localStorage.setItem("token", dados.Token);
        localStorage.setItem("codigo", dados.DadosPrestador.CNPJCPF);
        document.cookie = `pass=${obj.Senha}`;
        document.cookie = `cod=${dados.DadosPrestador.CNPJCPF}`;
        if (dados.nome == null || dados.senhaPadrao == true) {
          navigate("/conta/Perfil");
        } else navigate("/conta/");
      }
    } else return setError(serverError);
  }

  //auto login
  async function _AutoLogin() {
    if (CNPJCPF != null && TOKEN != null) {
      const { url, options } = AUTO_LOGIN(CNPJCPF, TOKEN);
      const { response, json } = await request(url, options);
      if (response != undefined) {
        if (response.status === 200) {
          let dados = json.Content;
          setLogin(true);
          setData(dados);
          if (dados.nome == null || dados.senhaPadrao == true) {
            navigate("/conta/Perfil");
          } else navigate("/conta");
        } else
          return setError(
            "Token de acesso expirado, realize o Login novamente!"
          );
      } else return setError(serverError);
    }
  }

  // primeiro acesso
  async function _FirstAcess(obj) {
    const { url, options } = FIRST_ACESS(obj.CNPJCPF, obj.Email);
    const { response, json } = await request(url, options);
    if (response != undefined) {
      if (response.status === 200) {
        navigate("/RegisterSucessful");
      } else return setError(json.Message);
    } else return setError(serverError);
  }

  // recuperação de senha
  async function _RecoverPassword(obj) {
    const { url, options } = RECOVER_PASSWORDD(obj.CNPJCPF, obj.Email);
    const { response, json } = await request(url, options);
    if (response != undefined) {
      if (response.status === 200) {
        navigate("/RecoverSuccessful");
      } else return setError(json.Message);
    } else return setError(serverError);
  }

  // liberar acesso
  async function _FreeAcess(cnpjcpf) {
    const { url, options } = FREE_ACESS(cnpjcpf);
    await request(url, options);
  }

  // alterar dados do perfil/usuario
  async function _ChangeUserData(obj) {
    const { url, options } = CHANGE_PROFILE(
      obj,
      data.DadosPrestador.CNPJCPF,
      data.senhaLiberada
    );
    const { json } = await request(url, options);
    setMsgDataChanges(json.Message);
  }

  //obter lista de usuarios prestador
  async function _GetUsersById() {
    const { url, options } = GET_USER(data.idPrestador);
    const { json, response } = await request(url, options);
    if (response.status === 200) {
      setUsers(json.Content);
    }
  }

  // ADD NOVO USUARIO
  async function _AddNewUser(obj) {
    const { url, options } = ADD_USER(
      obj,
      data.idPrestador,
      data.senhaLiberada
    );
    const { json } = await request(url, options);
    setMsgDataChanges(json.Message);
  }
  // DELETAR USUARIO
  async function _DeactiveUser(obj) {
    const { url, options } = DEACTIVE_USER(obj);
    const { json } = await request(url, options);
    setMsgDataChanges(json.Message);
  }

  //#endregion

  //#region  HANDLES GLOBAIS


  // reseta erro / mensagem

  React.useEffect(() => {
    setError(null);
    setMsgDataChanges("");
  }, [window.location.href]);

  // realiza logout
  const handleLogout = () => {
    navigate("/");
    setLogin(false);
    setProfile(false);
    setAnimateMenu(false);
    setData({});
    setCNPJCPF(null);
    setToken(null);
    setManangeUsers(false)
    setAddNewUser(false)
    setShowPriceTable(false)
    removeCookies();
    localStorage.removeItem("token");
    localStorage.removeItem("codigo");

  };
  // realiza liberação de funcionalidades 

  const Functions = () => {
    let dados = data;
    const Funcs = {
      1: setManangeUsers,
      2: setAddNewUser,
      3: setShowPriceTable,
    };
    if (dados.Funcionalidades) {
      return dados?.Funcionalidades.map((funcao) => funcao.idFuncionalidade)
        .map((id) => Funcs[id])
        .map((state) => state(true));
    }
  };
  React.useEffect(() => {
    Functions();
    if (manangeUsers || admin) {
      _GetUsersById();
    }
    if (data && data.admin) { return setAdmin(true) }
    else return setAdmin(false)
  }, [data, manangeUsers, admin]);


  //#endregion

  return (
    <GlobalContext.Provider
      value={{
        setProfile,
        setLogin,
        setAnimateMenu,
        setOption,
        setLoginData,
        setRecoverData,
        setFirtAcessData,
        setNewUserData,
        setAlterRegisterData,
        handleLogout,
        setRegUpData,
        setToggleModal,
        setGlobalHandle,
        setError,
        setUsers,
        setChangeData,
        _AutoLogin,
        _Login,
        _RecoverPassword,
        _FirstAcess,
        _FreeAcess,
        _ChangeUserData,
        _GetUsersById,
        _AddNewUser,
        _DeactiveUser,
        admin,
        changeData,
        users,
        msgDataChanges,
        data,
        globalHandle,
        option,
        profile,
        login,
        animateMenu,
        height,
        width,
        loading,
        error,
        loginData,
        recoverData,
        firtAcessData,
        newUserData,
        alterRegisterData,
        regUpData,
        address,
        toggleModal,
        CNPJCPF,
        //#region FUNCIONALIDADES
        manangeUsers,
        addNewUser,
        showPriceTable,
        //#endregion
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
