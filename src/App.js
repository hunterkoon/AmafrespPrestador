import './App.css';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import Login from './Pages/Login';
import Conta from './Pages/Conta';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStorage } from './Pages/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Conta>
                <Home />
              </Conta>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </GlobalStorage>
    </div>
  );
}

export default App;
