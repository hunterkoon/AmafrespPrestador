import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { handleWindow } from '../../Shared/Commons/Helpers/HandlerMenu';

import Home from '../../Pages/Account/Home';
import Gerenciar from '../../Pages/Account/GerenciarUsuarios';
import FaleConosco from '../../Pages/Account/FaleConosco';
import AdicionarUsuarios from '../../Pages/Account/AdicionarUsuarios';
import Recadastramento from '../../Pages/Account/Recadastramento';
import Status from '../../Pages/Account/Status';
import Menu from '../../Components/Main/MenuLateral';
import './Conta.css';



const Conta = () => {
  const { setAnimateMenu, setHandle } = React.useContext(GlobalContext);
  
  const handleMenuHide = (e) =>{
    const collectionStates = [setAnimateMenu,setHandle];
    collectionStates.forEach((states)=>{
      handleWindow(e ,states)
    })
  }
  
  return (
    <div className="main-conta" >
      <div className="div-menu">{<Menu />}</div>
      <div className="div-context" name='app-context' onClick={(e) => handleMenuHide(e) }>
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
