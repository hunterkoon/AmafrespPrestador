import React from 'react';
import useFetch from './Hooks/useFetch';
import useWindowDimensions from './Hooks/getDimensionScreen';
import { useNavigate } from 'react-router';
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const location = document.location.pathname;
  const [click, setClick] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [animateMenu, setAnimateMenu] = React.useState();
  const { data, loading, error, request, setData } = useFetch();
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();

  const handleLogoDirection = () => {
    if (location != '/conta/*') {
      console.log(location);
      return navigate('/');
    } else {
      console.log(location);
      return navigate('/conta');
    }
  };

  React.useEffect(() => {
    handleLoginContext();
  }, []);

  const handleLoginContext = () => {
    if (login !== true) {
      navigate('/');
    }
  };

  const handleWindowHamburguer = () => {
    if (width <= 1024 && login === true) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        click,
        setClick,
        profile,
        setProfile,
        login,
        setLogin,
        input,
        setInput,
        data,
        setData,
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
        location,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
