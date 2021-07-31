import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './Perfil.css';
import Maintenance from '../Components/Maintenance';
import '../../App.css';

const FaleConosco = () => {
  return (
    <div className="div-main-perfil pageView">
      <Titledecorated text="Perfil" />
      <Maintenance />
    </div>
  );
};

export default FaleConosco;
