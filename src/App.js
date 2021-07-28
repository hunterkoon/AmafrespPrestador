import './App.css';
import React from 'react';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import Login from './Pages/Login';
import Conta from './Pages/Conta';
import RecuperarSenha from './Pages/RecuperarSenha';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import { GlobalStorage } from './Pages/GlobalContext';
import NotFound from './Pages/NotFound';
import PrimeiroAcesso from './Pages/PrimeiroAcesso';

function App() {
  return (
    <>
      <HashRouter>
        <GlobalStorage>
          <div className="App">
            <Header />
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/conta/*" element={<Conta />} />
              <Route path="/PrimeiroAcesso" element={<PrimeiroAcesso />} />
              <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </GlobalStorage>
      </HashRouter>
    </>
  );
}

export default App;
