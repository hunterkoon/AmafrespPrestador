import React from 'react';
import Titledecorated from '../../Components/SubComponents/Titledecorated';
import Maintenance from '../../Components/MainComponents/Maintenance';
import './Status.css';
import '../../../App.css';

const Status = () => {
  return (
    <>
      <div className="div-main-status pageView">
        <div className="div-title-pages">
          <Titledecorated text="Status atualização cadastral" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default Status;
