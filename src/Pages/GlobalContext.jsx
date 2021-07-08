import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [click, setClick] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ click, setClick }}>
      {children}
    </GlobalContext.Provider>
  );
};
