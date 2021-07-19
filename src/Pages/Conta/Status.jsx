import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './Status.css';
import Maintenance from '../Components/Maintenance';

const Status = () => {
  return (
    <div className="div-main-status">
      <Titledecorated text="Status atualização cadastral" />
      <Maintenance />
    </div>
  );
};

export default Status;
