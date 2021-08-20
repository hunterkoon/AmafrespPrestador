import React from 'react';
import Maintenance from '../../Components/Main/Maintenance'
import Titledecorated from '../../Components/Sub/Titledecorated';
import './GerenciarUsuarios.css';
import '../../../App.css';

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
