import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './Status.css';
import Maintenance from '../Components/Maintenance';

const Status = () => {
  return (
    <>
      <div className="div-main-status">
        <div className="div-title-pages">
          <Titledecorated text="Status atualização cadastral" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default Status;
