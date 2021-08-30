import React from "react";
import useWindowDimensions from "../../Hooks/UseDimensionScreen";
import { useNavigate } from "react-router";
import useFetch from "../../Hooks/useFetch";


// import { GETDADOS } from "./Api";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

  const [newUserData, setNewUserData] = React.useState([]);
  const [firtAcessData, setFirtAcessData] = React.useState([]);
  const [recoverData, setRecoverData] = React.useState([]);
  const [loginData, setLoginData] = React.useState([]);
  const [permitionsOptions, setPermitionsOptions] = React.useState([]);
  const [option, setOption] = React.useState(false);
  const { data, setData, loading, error } = useFetch();
  const [profile, setProfile] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [animateMenu, setAnimateMenu] = React.useState(false);
  const [menuItemUsuarios, setmenuItemUsuarios] = React.useState(false);
  const [handle, setHandle] = React.useState(null);
  const [menuItemRecadastramento, setmenuItemRecadastramento] =
  React.useState(false);
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();


  // async function LoginValidate() {
  //   const { url, options } = GETDADOS();
  //   const { response, json } = await request(url, options);

  //   setData(json);
  //   FreeAcess(json);
  // }

  //LIBERAÇÃO SIMPLES LOGIN

  // const FreeAcess = (datas) => {
  //   if (datas) {
  //     setLogin(true);
  //   }
  // };

  // EXIBE MENU HAMBURGUER CASO WIDTH ESTIVER MENOR QUE 1024PX E LOGIN = TRUE
  const handleWindowHamburguer = () => {
    if (width <= 1024 && login === true) {
      return true;
    } else {
      return false;
    }
  };
  // ALTERA ROTA DEPENDENDO DO ESTADO LOGIN PARA O LOGITPO PRINCIPAL
  //RETORNA PARA AREA DE LOGIN CASO LOGIN SEJA FALSE]

  const handleLogoDirection = React.useEffect(() => {
    // const handleLogoDirection = () => {
    //   if (login) {
    //     return navigate("/conta");
    //   } else return navigate("/");
    // };
    //  handleLogoDirection();
  }, [login, navigate]);

  return (
    <GlobalContext.Provider
      value={{
        setProfile,
        setLogin,
        setAnimateMenu,
        handleWindowHamburguer,
        handleLogoDirection,
        // LoginValidate,
        setData,
        setOption,
        setmenuItemUsuarios,
        setmenuItemRecadastramento,
        setHandle,
        setLoginData,
        setRecoverData,
        setPermitionsOptions,
        setFirtAcessData,
        setNewUserData,
        option,
        profile,
        login,
        animateMenu,
        height,
        width,
        data,
        loading,
        error,
        menuItemUsuarios,
        menuItemRecadastramento,
        handle,
        loginData,
        recoverData,
        firtAcessData,
        permitionsOptions,
        newUserData,

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
