import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
const App = () => {


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:categoryId' element={<CategoryPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
