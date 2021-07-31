import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './Recadastramento.css';
import Maintenance from '../Components/Maintenance';

const Recadastramento = () => {
  return (
    <>
      <div className="div-main-recadastramento">
        <div className="div-title-pages">
          <Titledecorated text="Atualização Cadastral" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default Recadastramento;
