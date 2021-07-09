import React from 'react';
import { dadosCliente } from './Hooks/dadosCliente';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState({});
  const [click, setClick] = React.useState(false);
  const [profile, setProfile] = React.useState(false);

  const getDataGeneral = () => {
    setDados(dadosCliente[0].DADOS[0]);
  };
  React.useEffect(() => {
    getDataGeneral();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ click, setClick, dados, setDados, profile, setProfile }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
