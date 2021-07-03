import './App.css';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import Login from './Pages/Login';
import Conta from './Pages/Conta';
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
          <Route path="/conta">
            <Conta />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
