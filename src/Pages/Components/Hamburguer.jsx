import React from 'react';
import './Hamburguer.css';
import { GlobalContext } from '../GlobalContext';
const Hamburguer = () => {
  const location = document.location.pathname;
  const { animateMenu, setAnimateMenu } = React.useContext(GlobalContext);

  const handleClick = () => {
    setAnimateMenu(!animateMenu);
  };

  return (
    <div className="div-main-hamburguer" onClick={handleClick}>
      <div className={animateMenu ? 'div-sub-1-animate' : null}></div>
      <div className={animateMenu ? 'div-sub-2-animate' : null}></div>
      <div className={animateMenu ? 'div-sub-3-animate' : null}></div>
    </div>
  );
};

export default Hamburguer;
