import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

//Componentes
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Cart from './Components/Cart/Cart';
import {CartProvider} from './Context/CartContext';
import Checkout from './Components/Checkout/Checkout';


const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage greeting={"Bienvenidos a Bare Essentials"} />} />
            <Route path='/category/:categoryId' element={<CategoryPage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
