import React from 'react';
import useWindowDimensions from '../../Hooks/UseDimensionScreen';
import { useNavigate } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import { ApiCep } from '../../Shared/Commons/Constants/RoutesApis';
import { LOGIN, AUTO_LOGIN, RECOVER_PASSWORDD, FIRST_ACESS, FREE_ACESS, CHANGE_PROFILE } from './Api';
import { serverError } from '../../Shared/Commons/Constants/Errors';

// import { GETDADOS } from "./Api";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
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
  const { setLoading, loading, error, request, setError } = useFetch();
  const [address, setAdress] = React.useState([]);
  const { width, height } = useWindowDimensions();

  //FETCH DATA 

  const [CNPJCPF, setCNPJCPF] = React.useState(localStorage.getItem("codigo" && "codigo"));
  const [TOKEN, setToken] = React.useState(localStorage.getItem("token" && "token"));
  const [dadosAlterados, setDadosAlterados] = React.useState(null);
  const [data, setData] = React.useState({});


  // ATUALIZAÇÃO CADASTRAL
  const [regUpData, setRegUpData] = React.useState([]);

  // FETCH EDNE CEP
  React.useEffect(() => {
    async function GetCep() {
      const cep = ApiCep(regUpData.cep);
      if (regUpData.cep && regUpData.cep.length === 8) {
        const { json /*response */ } = await request(cep);
        setAdress(json);
      }
    }
    GetCep();
  }, [regUpData.cep, request]);

  //LOGIN
  async function _LoginValidate(obj) {
    const { url, options } = LOGIN(obj.CNPJCPF, obj.Senha);
    const { response, json } = await request(url, options);
    if (response.status === 200) {
      let dados = json.Content;
      setLogin(true);
      setData(json.Content);
      localStorage.setItem('token', dados.Token);
      localStorage.setItem('codigo', dados.CNPJCPF);
      if (dados.Nome == null || dados.SenhaPadrao == true) {
        navigate('/conta/Perfil');
      } else
        navigate('/conta/');
    }
  }

  //AUTO LOGIN
  async function AutoLogin() {
    if ((CNPJCPF != null) && (TOKEN != null)) {
      const { url, options } = AUTO_LOGIN(CNPJCPF, TOKEN);
      const { response, json } = await request(url, options);
      if (response != undefined) {
        if (response.status === 200) {
          let dados = json.Content;
          setLogin(true);
          setData(dados);
          if (dados.Nome == null || dados.SenhaPadrao == true) {
            navigate('/conta/Perfil');
          } else
            navigate('/conta/');
        }
        else
          return setError(json.Message)
      }
      else
        return setError(serverError);
    }
  }

  // FIRST ACESS
  async function _FirstAcess(obj) {
    const { url, options } = FIRST_ACESS(obj.CNPJCPF, obj.Email)
    const { response, json } = await request(url, options);
    if (response != undefined) {
      if (response.status === 200) {
        navigate("/RegisterSucessful")
      } else return setError(json.Message);
    } else return setError(serverError);
  }

  // RECOVER PASSWORD
  async function _RecoverPassword(obj) {
    const { url, options } = RECOVER_PASSWORDD(obj.CNPJCPF, obj.Email);
    const { response, json } = await request(url, options);
    if (response != undefined) {
      if (response.status === 200) {
        navigate("/RecoverSuccessful")
      } else return setError(json.Message);
    } else return setError(serverError);
  }

  // FREE ACESS 
  async function _FreeAcess(id) {
    const { url, options } = FREE_ACESS(id);
    await request(url, options);
  }

  // ALTERAR DADOS PERFIL
  async function _ChangeUserData(obj) {
    const { url, options } = CHANGE_PROFILE(obj, data.IdUsuario, data.CNPJCPF);
    const { json } = await request(url, options);
    setDadosAlterados(json.Message);
  }


  // RESETA POSIÇÃO DE ERRO
  React.useEffect(() => {
    setError(null)
  }, [window.location.href])


  const handleLogout = () => {
    navigate('/');
    setLogin(false);
    setProfile(false);
    setAnimateMenu(false);
    setData({});
    localStorage.removeItem('token');
    localStorage.removeItem('codigo');
    setCNPJCPF(null);
    setToken(null);
  };

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
        AutoLogin,
        _LoginValidate,
        _RecoverPassword,
        _FirstAcess,
        _FreeAcess,
        setError,
        _ChangeUserData,
        dadosAlterados,
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
