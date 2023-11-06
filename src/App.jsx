import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//Componentes
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import ShopPage from "./Pages/ShopPage/ShopPage";
import CartContext from './Context/CartContext';


const App = () => {

  const [cart, setCart] = useState([]);
  const AddToCart = (product, quantity) => {
    const addedProduct = { ...product, quantity };
    const newCart = [...cart];
    const isAdded = newCart.find((product) => product.id === addedProduct.id);


    if (isAdded) {
      isAdded.quantity += quantity;
    } else {
      newCart.push(addedProduct);
    };
    setCart(newCart);
  };

  const quantityInCart = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }



  return (
    <div>
      <CartContext.Provider value={{ cart, AddToCart, quantityInCart }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage greeting={"Bienvenidos a Bare Essentials"} />} />
            <Route path='/category/:categoryId' element={<CategoryPage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/shop' element={<ShopPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartContext.Provider>
    </div>
  );
};

export default App;
