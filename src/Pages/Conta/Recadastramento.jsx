import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './Recadastramento.css';
import Maintenance from '../Components/Maintenance';

const Recadastramento = () => {
  return (
    <div className="div-main-recadastramento">
      <Titledecorated text="Atualização Cadastral" />
      <Maintenance />
    </div>
  );
};

export default Recadastramento;
