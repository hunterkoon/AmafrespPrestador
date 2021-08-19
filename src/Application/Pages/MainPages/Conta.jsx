import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { handleWindow } from '../../Shared/Commons/Helpers/HandlerMenu';

import Home from '../../Pages/AccountPages/Home';
import Gerenciar from '../../Pages/AccountPages/GerenciarUsuarios';
import FaleConosco from '../../Pages/AccountPages/FaleConosco';
import AdicionarUsuarios from '../../Pages/AccountPages/AdicionarUsuarios';
import Recadastramento from '../../Pages/AccountPages/Recadastramento';
import Status from '../../Pages/AccountPages/Status';
import Menu from '../../Components/MainComponents/MenuLateral';
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
