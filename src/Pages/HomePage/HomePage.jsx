import React from 'react';
import "./HomePage.css";



//Images
import img from "./inicio-destello.png";


export const HomePage = ({ greeting }) => {
  return (
    <div>
      <h1 className='bienvenida'>{greeting}</h1>

      <div className='img-bienvenida'>
        <img className="img-inicio" src={img} alt="destello" />
        <p className='txt-bienvenida'>Aquí encontrarás todos los productos para una piel radiante</p>
      </div>
    </div>
  );
};

export default HomePage;