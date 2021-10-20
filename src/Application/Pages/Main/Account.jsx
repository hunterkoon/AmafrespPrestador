import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { handleWindow } from '../../Shared/Commons/Helpers/HandlerMenu';
import Home from '../Account/Home/Home';
import Gerenciar from '../Account/User Mananger/UsersMananger';
import FaleConosco from '../Account/Contact/Contact';
import AdicionarUsuarios from '../Account/Add User/AddUser';
import RegisterUpdate from '../Account/Registration Update/RegisterUpdate';
import Status from '../Account/Status/Status';
import Menu from '../../Components/Main/MainMenu';
import Perfil from '../Account/Profile/Profile'
import Tabela from '../Account/Functionalities/PriceTable'
import './Account.css';

const Account = () => {
  const { setAnimateMenu, setGlobalHandle, setProfile } = React.useContext(GlobalContext);

  const handleMenuHide = (e) => {
    const collectionStates = [setAnimateMenu, setGlobalHandle, setProfile];
    collectionStates.forEach((states) => {
      handleWindow(e, states)
    })
  }
  return (
    <div className="main-conta" >
      <div className="div-menu">{<Menu />}</div>
      <aside className="div-context" name='app-context' onClick={(e) => handleMenuHide(e)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Gerenciar" element={<Gerenciar />} /> {/*todo protectRoute */}
          <Route path="Contatos" element={<FaleConosco />} />
          <Route path="AdicionarUsuarios" element={<AdicionarUsuarios />} />
          <Route path="RegisterUpdate" element={<RegisterUpdate />} />
          <Route path="Status" element={<Status />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="Tabela" element={<Tabela />} />
        </Routes>
      </aside>
    </div>
  );
};

export default Account;
