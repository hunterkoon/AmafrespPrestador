import React from 'react';

import Titledecorated from '../Components/SubComponents/Titledecorated';
import Maintenance from '../Components/MainComponents/Maintenance';
import './Recadastramento.css';
import '../../App.css';
const Recadastramento = () => {
  return (
    <>
      <div className="div-main-recadastramento pageView">
        <div className="div-title-pages">
          <Titledecorated text="Atualização Cadastral" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default Recadastramento;
