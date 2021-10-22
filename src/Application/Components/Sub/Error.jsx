import React from 'react';
import { GlobalContext } from '../../Pages/Main/GlobalContext';

const Error = () => {
  const { error } = React.useContext(GlobalContext);
  return (
    <>{error ? <span style={{
      display: "flex",
      color: "red",
      fontSize: "1em",
      height: "40px",
      alignItems: "center"
    }}>{error}</span> : null}
    </>
  )
}

export default Error
