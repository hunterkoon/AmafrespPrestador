import React from 'react';
import useWindowDimensions from '../../Hooks/UseDimensionScreen';
import { useNavigate } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import { ApiCep } from '../../Shared/Commons/Constants/RoutesApis';
import { LOGIN, AUTO_LOGIN, RECOVER_PASSWORDD, FIRST_ACESS, FREE_ACESS } from './Api';

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
  const [data, setData] = React.useState({});

  const [CNPJCPF] = React.useState
    (localStorage.getItem("codigo" && "codigo"));
  const [TOKEN] = React.useState
    (localStorage.getItem("token" && "token"));


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
      setLogin(true);
      setData(json.Content);
      navigate('/conta')
      localStorage.setItem('token', json.Content.Token);
      localStorage.setItem('codigo', json.Content.CNPJCPF);
    }
  }
  //AUTO LOGIN
  React.useEffect(() => {
    if ((CNPJCPF != null) && (TOKEN != null)) {
      async function _AutoLogin() {
        const { url, options } = AUTO_LOGIN(CNPJCPF, TOKEN);
        const { response, json } = await request(url, options);
        if (response.status === 200) {
          setLogin(true);
          setData(json.Content);
          navigate('/conta');
        }
      }
      _AutoLogin();
    }
  }, [])
  // FIRST ACESS

  async function _FirstAcess(obj) {
    const { url, options } = FIRST_ACESS(obj.CNPJCPF, obj.Senha, obj.Email)
    const { response } = await request(url, options);
    if (response.status === 200) {
      navigate("/RegisterSucessful")
    }
  }

  // RECOVER PASSWORD
  async function _RecoverPassword(obj) {
    const { url, options } = RECOVER_PASSWORDD(obj.CNPJCPF, obj.Email);
    const { response } = await request(url, options);
    if (response.status === 200) {
      navigate("/RecoverSuccessful")
    }
  }
  // FREE ACESS 

  async function _FreeAcess(id) {
    const { url, options } = FREE_ACESS(id);
    await request(url, options);
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
    localStorage.removeItem('token')
    localStorage.removeItem('codigo')
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
        _LoginValidate,
        _RecoverPassword,
        _FirstAcess,
        _FreeAcess,
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
