import React from 'react';
import Manutencao from '../../Assets/Manutencao.svg';

const Maintenance = () => {
  return (
    <div className="div-main-maintenance">
      <img
        style={{
          margin: '3em',
          width: '25%',
          display: 'flex',
          alignSelf: 'center',
        }}
        className="img-status"
        src={Manutencao}
        alt=""
      />
      <h1
        style={{
          display: 'flex',
          alignSelf: 'center',
        }}
      >
        Em Contrução...
      </h1>
    </div>
  );
};

export default Maintenance;
