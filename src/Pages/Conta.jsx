import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Conta.css';
import Menu from './Components/MenuLateral';
import Home from './Conta/Home';
import Gerenciar from './Conta/GerenciarUsuarios';
import FaleConosco from './Conta/FaleConosco';
import AdicionarUsuarios from './Conta/AdicionarUsuarios';
import Recadastramento from './Conta/Recadastramento';
import Status from './Conta/Status';
import { GlobalContext } from './GlobalContext';
import { handleWindow } from './Shared/Commons/constant/handler-menu';



const Conta = () => {
  const { setAnimateMenu ,  setHandle} = React.useContext(GlobalContext);

  return (
    <div className="main-conta" >
      <div  className="div-menu">{<Menu />}</div>
      <div className="div-context" name='app-context' onClick={(e) =>{ return  ([handleWindow(e,setHandle ),handleWindow(e,setAnimateMenu) ])}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Gerenciar" element={<Gerenciar />} />
          <Route path="Contatos" element={<FaleConosco />} />
          <Route path="AdicionarUsuarios" element={<AdicionarUsuarios />} />
          <Route path="Recadastramento" element={<Recadastramento />} />
          <Route path="Status" element={<Status />} />
        </Routes>
      </div>
    </div>
  );
};

export default Conta;
