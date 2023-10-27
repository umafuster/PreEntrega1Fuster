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
      </div>
    </div>
  );
};

export default HomePage;