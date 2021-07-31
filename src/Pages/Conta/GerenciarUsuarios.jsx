import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './GerenciarUsuarios.css';
import Maintenance from '../Components/Maintenance';

const GerenciarUsuarios = () => {
  return (
    <>
      <div className="div-main-gerenciarUsuarios">
        <div className="div-title-pages">
          <Titledecorated text="Gerênciar Usuários" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default GerenciarUsuarios;
