import React from 'react';
import Title from '../Sub/Title';
import Manutencao from '../../../Assets/Manutencao.svg';
import './Maintenance.css';

const Maintenance = () => {
  return (
    <div className="div-main-maintenance">
      <Title text="Em Manutenção" />
      <img className="img-maintenance" src={Manutencao} alt="Gear" />
    </div>
  );
};

export default Maintenance;
