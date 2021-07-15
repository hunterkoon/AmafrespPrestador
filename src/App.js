import './App.css';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import Login from './Pages/Login';
import Conta from './Pages/Conta';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStorage } from './Pages/GlobalContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStorage>
          <div className="App">
            <Header />
            <Routes>
              <Route exact path="/*" element={<Login />} />
              <Route path="/conta/*" element={<Conta />} />
            </Routes>
            <Footer />
          </div>
        </GlobalStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
