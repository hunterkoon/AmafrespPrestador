import React from 'react';
import './Maintenance.css';
import Manutencao from '../../Assets/Manutencao.svg';
import Title from '../Shared/Title';

const Maintenance = () => {
  return (
    <div className="div-main-maintenance">
      <Title text="Em Manutenção" />
      <img className="img-maintenance" src={Manutencao} alt="Gear" />
    </div>
  );
};

export default Maintenance;
