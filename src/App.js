import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar/>
        <Routes>
          <Route exatc path='/' element={ <ItemListContainer/> } />
          <Route exatc path='/category/:id' element={ <ItemListContainer/> } />
          <Route exatc path='/item/:id' element={ <ItemDetailContainer/> } />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
