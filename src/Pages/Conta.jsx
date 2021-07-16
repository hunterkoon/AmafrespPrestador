import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Conta.css';
import Menu from './Components/MenuLateral';
import Home from './Home';
import Gerenciar from './GerenciarUsuarios';
import FaleConosco from './FaleConosco';
import AdicionarUsuarios from './AdicionarUsuarios';
import Recadastramento from './Recadastramento';
const Conta = () => {
  return (
    <div className="main-conta">
      <div className="div-menu">{<Menu />}</div>
      <div className="div-context">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Gerenciar" element={<Gerenciar />} />
          <Route path="Contatos" element={<FaleConosco />} />
          <Route path="AdicionarUsuarios" element={<AdicionarUsuarios />} />
          <Route path="Recadastramento" element={<Recadastramento />} />
        </Routes>
      </div>
    </div>
  );
};

export default Conta;
