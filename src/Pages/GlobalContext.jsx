import React from 'react';
// import { dadosCliente } from './Hooks/dadosCliente';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState({});
  const [click, setClick] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [error, setError] = React.useState('');
  const [input, setInput] = React.useState('');

  async function getdados() {
    try {
      const url = 'http://localhost:3036/prestador';
      const response = await fetch(url);
      const responseData = await response.json();
      setData({
        USER: responseData[0].USER,
        NOME: responseData[0].NOME,
        CNPJ: responseData[0].CNPJ,
        DEPARTAMENTO: responseData[0].DEPARTAMENTO,
        EMPRESA: responseData[0].EMPRESA,
        CREDENCIADO: responseData[0].TIPO_CREDENCIADO,
        SEGMENTO: responseData[0].SEGMENTO,
      });
    } catch (erro) {
      setError('erro');
    }
  }
  React.useEffect(() => {
    getdados();
  }, [login]);

  return (
    <GlobalContext.Provider
      value={{
        click,
        setClick,
        data,
        setData,
        profile,
        setProfile,
        login,
        setLogin,
        error,
        setError,
        input,
        setInput,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
