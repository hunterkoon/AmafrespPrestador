import React from 'react';
import Titledecorated from '../../Components/SubComponents/Titledecorated';
import Maintenance from '../../Components/MainComponents/Maintenance';
import './FaleConosco.css';
import '../../../App.css';

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
