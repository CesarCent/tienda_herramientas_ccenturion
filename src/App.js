import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ItemListContainer greetings="Esto va a ser una tienda!"/>
          <br/>
          <ItemCount stock={10} initial={0} />
        </p>
      </header>
    </div>
  );
}

export default App;
