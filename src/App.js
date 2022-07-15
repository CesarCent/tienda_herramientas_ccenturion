import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import {  CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exatc path='/' element={<ItemListContainer />} />
            <Route exatc path='/category/:id' element={<ItemListContainer />} />
            <Route exatc path='/item/:id' element={<ItemDetailContainer />} />
            <Route exatc path='/cart' element={ <Cart/> } />
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
