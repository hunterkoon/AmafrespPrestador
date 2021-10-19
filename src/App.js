import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { GlobalStorage } from "./Application/Pages/Main/GlobalContext";
import Header from "./Application/Components/Main/Header";
import Footer from "./Application/Components/Main/Footer";
import Login from "./Application/Pages/Main/Login";
import Account from "./Application/Pages/Main/Account";
import NotFound from "./Application/Pages/Main/NotFound";
import FirstAccess from "./Application/Pages/Main/FirstAccess";
import RecoverPassword from "./Application/Pages/Main/RecoverPassword";
import RegisterSucessful from "./Application/Pages/Main/RegisterSuccessful";
import RecoverSucessful from "./Application/Pages/Main/RecoverSucessful";
import RegisterFinish from "./Application/Pages/Main/RegisterFinish";
import Help from "./Application/Pages/Main/Help";
import ProtectRoute from './Application/Hooks/useProjectRoute'
import "./App.css";

function App() {


  return (
    <>
      <HashRouter>
        <GlobalStorage>
          <Header />
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/conta/*" element={<Account />} />
              <Route path="/PrimeiroAcesso" element={<FirstAccess />} />
              <Route path="/RecuperarSenha" element={<RecoverPassword />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/RecoverSuccessful" element={<RecoverSucessful />} />
              <Route path="/RegisterSucessful" element={<RegisterSucessful />} />
              <Route exact path="/RegisterFinish/:CNPJCPF" element={<RegisterFinish />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </GlobalStorage>
      </HashRouter>
    </>
  );
}

export default App;
