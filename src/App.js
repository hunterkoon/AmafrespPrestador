import './App.css';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Header className="header-app" />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
