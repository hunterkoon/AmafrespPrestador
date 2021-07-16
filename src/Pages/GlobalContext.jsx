import React from 'react';
import useFetch from './Hooks/useFetch';
import useWindowDimensions from './Hooks/getDimensionScreen';
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [click, setClick] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [animateMenu, setAnimateMenu] = React.useState();
  const { data, loading, error, request, setData } = useFetch();
  const { width, height } = useWindowDimensions();

  const logout = () => {
    setLogin(false);
    setProfile(false);
  };

  React.useEffect(() => {
    handlelogin();
  }, [login]);

  function handlelogin() {
    if (login === true) {
      request('http://localhost:3036/prestador');
    }
  }

  const handleloginPage = () => {
    handlelogin();
    setLogin(true);
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
        logout,
        handleloginPage,
        loading,
        error,
        request,
        setData,
        animateMenu,
        setAnimateMenu,
        width,
        height,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
