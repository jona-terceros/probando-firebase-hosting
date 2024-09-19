import logo from './logo.svg';
import './App.css';
import Component from './Component';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola! este es el entorno de pruebas, pruebas
        </p>
        <Component/>
      </header>
    </div>
  );
}

export default App;
