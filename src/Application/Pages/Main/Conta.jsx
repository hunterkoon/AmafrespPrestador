import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { handleWindow } from '../../Shared/Commons/Helpers/HandlerMenu';
import Home from '../Account/Home/Home';
import Gerenciar from '../Account/User Mananger/GerenciarUsuarios';
import FaleConosco from '../../Pages/Account/Contact/FaleConosco';
import AdicionarUsuarios from '../../Pages/Account/Add User/AdicionarUsuarios';
import RegisterUpdate from '../../Pages/Account/Registration Update/RegisterUpdate';
import Status from '../../Pages/Account/Status/Status';
import Menu from '../../Components/Main/MenuLateral';
import Perfil from '../Account/Profile/Perfil'
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
