import React from 'react';
import Titledecorated from '../../../Components/Sub/Titledecorated';
import Maintenance from '../../../Components/Main/Maintenance';
import './Contact.css';

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
