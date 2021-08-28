import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import { GlobalStorage } from './Application/Pages/Main/GlobalContext';


import Header from './Application/Components/Main/Header';
import Footer from './Application/Components/Main/Footer';
import Login from './Application/Pages/Main/Login';
import Conta from './Application/Pages/Main/Conta';
import RecuperarSenha from './Application/Pages/Main/RecuperarSenha';
import RecuperacaoSucessfull from './Application/Pages/Main/RecuperacaoSucessfull';
import NotFound from './Application/Pages/Main/NotFound';
import PrimeiroAcesso from './Application/Pages/Main/PrimeiroAcesso';
import Help from './Application/Pages/Main/Help';
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <GlobalStorage>
          <Header />
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Login />} />
            <Route path="/conta/*" element={<Conta />} />
            <Route path="/PrimeiroAcesso" element={<PrimeiroAcesso />} />
              <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
              <Route path="/Help" element={<Help />} />
              <Route
                path="/RecuperacaoSucessfull"
                element={<RecuperacaoSucessfull />}
              />
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
