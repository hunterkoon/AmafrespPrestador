import React from 'react';
import { dadosCliente } from './Hooks/dadosCliente';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState({});
  const [click, setClick] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [login, setLogin] = React.useState(false);

  const getDataGeneral = () => {
    login === true ? setDados(dadosCliente[0].DADOS[0]) : setDados({});
  };
  React.useEffect(() => {
    getDataGeneral();
  }, [login]);

  return (
    <GlobalContext.Provider
      value={{
        click,
        setClick,
        dados,
        setDados,
        profile,
        setProfile,
        login,
        setLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
