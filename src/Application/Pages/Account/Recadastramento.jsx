import React from 'react';

import Titledecorated from '../../Components/Sub/Titledecorated';
import Maintenance from '../../Components/Main/Maintenance';
import './Recadastramento.css';
import '../../../App.css';
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
