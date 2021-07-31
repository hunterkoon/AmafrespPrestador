import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './Recadastramento.css';
import Maintenance from '../Components/Maintenance';
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
