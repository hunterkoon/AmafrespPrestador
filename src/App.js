import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import { GlobalStorage } from './Aplication/MainPages/GlobalContext';


import Header from './Aplication/Components/MainComponents/Header';
import Footer from './Aplication/Components/MainComponents/Footer';

import Login from './Aplication/MainPages/Login';
import Conta from './Aplication/MainPages/Conta';
import RecuperarSenha from './Aplication/MainPages/RecuperarSenha';
import RecuperacaoSucessfull from './Aplication/MainPages/RecuperacaoSucessfull';
import NotFound from './Aplication/MainPages/NotFound';
import PrimeiroAcesso from './Aplication/MainPages/PrimeiroAcesso';
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
