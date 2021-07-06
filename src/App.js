import './App.css';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import Login from './Pages/Login';
import Conta from './Pages/Conta';
import Recadastramento from './Pages/Recadastramento';
import Home from './Pages/Home';
import Usuarios from './Pages/AdicionarUsuarios';
import GerenciarUsuarios from './Pages/GerenciarUsuarios';
import FaleConosco from './Pages/FaleConosco';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header
          user="Gabriel Pinheiro Campos"
          employ="Clinica Gabriel C 23.855.030/0001-73"
        />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/conta">
            <Conta>{<Home />}</Conta>
          </Route>
          <Route exact path="/conta/recadastramento">
            <Conta>{<Recadastramento />}</Conta>
          </Route>
          <Route exact path="/conta/usuario">
            <Conta>{<Usuarios />}</Conta>
          </Route>
          <Route exact path="/conta/gerenciar">
            <Conta>{<GerenciarUsuarios />}</Conta>
          </Route>
          <Route exact path="/conta/faleconosco">
            <Conta>{<FaleConosco />}</Conta>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
