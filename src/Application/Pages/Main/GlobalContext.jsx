import React from 'react';
import useWindowDimensions from '../../Hooks/UseDimensionScreen';
import { useNavigate } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import { ApiCep } from '../../Shared/Commons/Constants/RoutesApis';
import { LOGIN } from './Api';

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
  const { loading, error, request } = useFetch();
  const [address, setAdress] = React.useState([]);
  const { width, height } = useWindowDimensions();

  const [data, setData] = React.useState({});
  const [messageLogin, setMessageLogin] = React.useState([]);
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
  async function LoginValidate(obj) {
    const { url, options } = LOGIN(obj.CNPJCPF, obj.Senha);
    const { response, json } = await request(url, options);

    if (json.StatusCode === 200) {
      setLogin(true);
      setData(json.Content);
      localStorage.setItem("token", json.Content.Token)
    } else {
      setMessageLogin(json.Message);
    };
  }

  // ALTERA ROTA DEPENDENDO DO ESTADO LOGIN PARA O LOGITPO PRINCIPAL
  //RETORNA PARA AREA DE LOGIN CASO LOGIN SEJA FALSE]
  React.useEffect(() => {
    if (login) {
      return navigate('/conta');
    } else return navigate('/');
  }, [login, navigate]);

  const handleLogout = () => {
    navigate('/');
    setLogin(false);
    setProfile(false);
    setAnimateMenu(false);
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
        LoginValidate,
        data,
        messageLogin,
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
