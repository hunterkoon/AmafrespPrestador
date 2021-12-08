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
import Tabela from '../Account/Functionalities/Pages/PriceTable'
import Payments from '../Account/Functionalities/Pages/Payments';
import Services from '../Account/Functionalities/Pages/Services';
import Functionalities from '../Account/Functionalities/Functionalities';
import QueryBatch from '../Account/Functionalities/Pages/QueryBatch';
import Glosas from '../Account/Functionalities/Pages/Glosas';
import Eligibility from '../Account/Functionalities/Pages/Eligibility';
import Informs from '../Account/Functionalities/Pages/Informs';
import Questions from '../Account/Functionalities/Pages/Questions';
import Others from '../Account/Functionalities/Pages/Others';
import Forms from '../Account/Functionalities/Pages/Forms';
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
          <Route path="Gerenciar" element={<Gerenciar />} />
          <Route path="Contatos" element={<FaleConosco />} />
          <Route path="AdicionarUsuarios" element={<AdicionarUsuarios />} />
          <Route path="RegisterUpdate" element={<RegisterUpdate />} />
          <Route path="Status" element={<Status />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="Funcionalidades" element={<Functionalities />} />

          {/* Funcionalidades */}
          <Route path="TabelaPrecos" element={<Tabela />} />
          <Route path="Pagamentos" element={<Payments />} />
          <Route path="Atendimentos" element={<Services />} />
          <Route path="Informes" element={<Informs />} />
          <Route path="Lotes" element={<QueryBatch />} />
          <Route path="Glosas" element={<Glosas />} />
          <Route path="Elegibilidade" element={<Eligibility />} />
          <Route path="Formularios" element={<Forms />} />
          <Route path="Duvidas" element={<Questions />} />
          <Route path="Outros" element={<Others />} />
        </Routes>
      </aside>
    </div>
  );
};

export default Account;
