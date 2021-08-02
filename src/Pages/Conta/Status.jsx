import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './Status.css';
import Maintenance from '../Components/Maintenance';
import '../../App.css';

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
