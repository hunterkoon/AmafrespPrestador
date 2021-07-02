import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import Login from './Pages/Login';
import Conta from './Pages/Conta';

function App() {
  return (
    <div className="App">
      <Header
        user="Gabriel Pinheiro Campos"
        employ="Clinica Gabriel C 23.855.030/0001-73"
      />
      <Login />
      <Conta />
      <Footer />
    </div>
  );
}

export default App;
