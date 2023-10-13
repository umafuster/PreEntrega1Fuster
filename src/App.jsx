import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import ListContainerPage from './Pages/ListContainerPage/ListContainerPage';
const App = () => {


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a Bare Essentials"} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:id' element={<ListContainerPage />} />
          <Route path='/item/:id' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
