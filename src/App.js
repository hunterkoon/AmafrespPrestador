import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import { GlobalStorage } from './Application/MainPages/GlobalContext';


import Header from './Application/Components/MainComponents/Header';
import Footer from './Application/Components/MainComponents/Footer';

import Login from './Application/MainPages/Login';
import Conta from './Application/MainPages/Conta';
import RecuperarSenha from './Application/MainPages/RecuperarSenha';
import RecuperacaoSucessfull from './Application/MainPages/RecuperacaoSucessfull';
import NotFound from './Application/MainPages/NotFound';
import PrimeiroAcesso from './Application/MainPages/PrimeiroAcesso';
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
