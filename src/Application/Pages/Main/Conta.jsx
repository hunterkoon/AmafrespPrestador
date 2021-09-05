import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { handleWindow } from '../../Shared/Commons/Helpers/HandlerMenu';
import Home from '../../Pages/Account/Home';
import Gerenciar from '../../Pages/Account/GerenciarUsuarios';
import FaleConosco from '../../Pages/Account/FaleConosco';
import AdicionarUsuarios from '../../Pages/Account/AdicionarUsuarios';
import RegisterUpdate from '../../Pages/Account/RegisterUpdate';
import Status from '../../Pages/Account/Status';
import Menu from '../../Components/Main/MenuLateral';
import Perfil from '../Account/Perfil'
import './Conta.css';



const Conta = () => {
  const { setAnimateMenu, setHandle , setProfile } = React.useContext(GlobalContext);
  
  const handleMenuHide = (e) =>{
    const collectionStates = [setAnimateMenu,setHandle , setProfile];
    collectionStates.forEach((states)=>{
      handleWindow(e ,states)
    })
  }
  
  return (
    <div className="main-conta" >
      <div  className="div-menu">{<Menu />}</div>
      <aside className="div-context" name='app-context' onClick={(e) => handleMenuHide(e) }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Gerenciar" element={<Gerenciar />} />
          <Route path="Contatos" element={<FaleConosco />} />
          <Route path="AdicionarUsuarios" element={<AdicionarUsuarios />} />
          <Route path="RegisterUpdate" element={<RegisterUpdate />} />
          <Route path="Status" element={<Status />} />
          <Route path="Perfil" element={<Perfil/>} />
        </Routes>
      </aside>
    </div>
  );
};

export default Conta;
