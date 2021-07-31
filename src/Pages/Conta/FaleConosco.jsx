import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './FaleConosco.css';
import Maintenance from '../Components/Maintenance';

const FaleConosco = () => {
  return (
    <>
      <div className="div-main-faleConosco">
        <div className="div-title-pages">
          <Titledecorated text="Fale Conosco" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default FaleConosco;
