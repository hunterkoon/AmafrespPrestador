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
import { GlobalStorage } from './Pages/GlobalContext';
import Perfil from './Pages/Perfil';

function App() {
  return (
    <GlobalStorage>
      <div className="App">
        <Router>
          <Header />
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
            <Route exact path="/conta/perfil">
              <Conta>{<Perfil />}</Conta>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </GlobalStorage>
  );
}

export default App;
