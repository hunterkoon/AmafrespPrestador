import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { handleWindow } from '../Shared/Commons/Helpers/handler-menu';
import Home from '../AccountPages/Home';
import Gerenciar from '../AccountPages/GerenciarUsuarios';
import FaleConosco from '../AccountPages/FaleConosco';
import AdicionarUsuarios from '../AccountPages/AdicionarUsuarios';
import Recadastramento from '../AccountPages/Recadastramento';
import Status from '../AccountPages/Status';
import Menu from '../Components/MainComponents/MenuLateral';
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
