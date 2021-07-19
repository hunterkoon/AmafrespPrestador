import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './Perfil.css';
import Maintenance from '../Components/Maintenance';

const FaleConosco = () => {
  return (
    <div className="div-main-perfil">
      <Titledecorated text="Perfil" />
      <Maintenance />
    </div>
  );
};

export default FaleConosco;
