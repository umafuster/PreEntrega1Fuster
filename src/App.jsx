import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import NavBar from './Components/NavBar/NavBar';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductPage from './Pages/ProductPage/ProductPage';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage  greeting={"Bienvenidos a Bare Essentials"} />} />
          <Route path='/category/:categoryId' element={<CategoryPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
