import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './GerenciarUsuarios.css';
import Maintenance from '../Components/Maintenance';
import '../../App.css';

const GerenciarUsuarios = () => {
  return (
    <>
      <div className="div-main-gerenciarUsuarios pageView">
        <div className="div-title-pages">
          <Titledecorated text="Gerênciar Usuários" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default GerenciarUsuarios;
