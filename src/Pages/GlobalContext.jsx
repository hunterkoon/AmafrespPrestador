import React from 'react';
import useFetch from './Hooks/useFetch';
import useWindowDimensions from './Hooks/getDimensionScreen';
import { useNavigate } from 'react-router';
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [profile, setProfile] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [animateMenu, setAnimateMenu] = React.useState();
  const { data, loading, error, request, setData } = useFetch();
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();

  const handleLogoDirection = () => {
    if (login) {
      return navigate('/conta');
    } else return navigate('/');
  };

  //RETORNA PARA AREA DE LOGIN CASO LOGIN = FALSE

  // React.useEffect(() => {
  //   handleLoginContext();
  // }, [login]);

  const handleLoginContext = () => {
    if (login === true) {
      navigate('/conta');
    } else {
      navigate('/');
    }
  };
  // EXIBE MENU HAMBURGUER CASO WIDTH ESTIVER MENOR QUE 1024PX E LOGIN = TRUE
  const handleWindowHamburguer = () => {
    if (width <= 1024 && login === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        profile,
        setProfile,
        login,
        setLogin,
        loading,
        error,
        request,
        setData,
        animateMenu,
        setAnimateMenu,
        width,
        height,
        handleWindowHamburguer,
        handleLogoDirection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
