import React from 'react';
import { GlobalContext } from '../Pages/Main/GlobalContext';
import { Navigate, Route } from "react-router-dom";

const ProtectRoute = (props) => {
  const { login } = React.useContext(GlobalContext);

  if (login === true) return <Route {...props} />;
  else if (login === false || login === null) return <Navigate to="/" />;
  else return null;
}
export default ProtectRoute
