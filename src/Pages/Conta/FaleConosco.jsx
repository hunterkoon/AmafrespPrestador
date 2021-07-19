import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './FaleConosco.css';
import Maintenance from '../Components/Maintenance';

const FaleConosco = () => {
  return (
    <div className="div-main-faleConosco">
      <Titledecorated text="Fale Conosco" />
      <Maintenance />
    </div>
  );
};

export default FaleConosco;
