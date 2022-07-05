import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <header className="App-header">
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
