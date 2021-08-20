import React from 'react';
import { GlobalContext } from '../GlobalContext';

const ProtectedRoute = () => {
  const { setLogin } = React.useContext(GlobalContext);

  const handlelogin = () => {};

  return <React.Fragment></React.Fragment>;
};

export default ProtectedRoute;
