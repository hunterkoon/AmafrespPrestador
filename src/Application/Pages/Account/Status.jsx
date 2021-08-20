import React from 'react';
import Titledecorated from '../../Components/Sub/Titledecorated';
import Maintenance from '../../Components/Main/Maintenance';
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
