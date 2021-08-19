import React from 'react';
import { GlobalContext } from '../../Pages/MainPages/GlobalContext';
import './Hamburguer.css';

const Hamburguer = () => {
  const { animateMenu, setAnimateMenu, setProfile } =
    React.useContext(GlobalContext);

  const handleClick = () => {
    setAnimateMenu(!animateMenu);
    setProfile(false);
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
