import React from "react";
import useWindowDimensions from "./Hooks/getDimensionScreen";
import { useNavigate } from "react-router";
import { GETDADOS } from "./Api";
import useFetch from "./Hooks/useFetch";
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

  const [option, setOption] = React.useState(null);
  const { data, setData, request, loading, error, setError } = useFetch();
  const [profile, setProfile] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [animateMenu, setAnimateMenu] = React.useState(null);
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

  
  
  React.useEffect(() => {
    console.log("passou no global")
    handleLogoDirection();
  }, [login]);

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
  
  const handleLogoDirection = () => {
    if (login) {
      return navigate("/conta");
    } else return navigate("/");
  };
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
        option,
        profile,
        login,
        animateMenu,
        height,
        width,
        data,
        loading,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
