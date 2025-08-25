import logo from './logo.svg';
import './App.css';
import Bolao from './bolao';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Bolao />
        </p>

      </header>
      
    </div>
  );
}

export default App;
