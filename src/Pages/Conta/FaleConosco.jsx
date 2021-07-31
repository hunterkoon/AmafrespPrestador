import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './FaleConosco.css';
import Maintenance from '../Components/Maintenance';
import '../../App.css';

const FaleConosco = () => {
  return (
    <>
      <div className="div-main-faleConosco pageView">
        <div className="div-title-pages">
          <Titledecorated text="Fale Conosco" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default FaleConosco;
