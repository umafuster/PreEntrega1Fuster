import React from 'react';
import "./NavBar.css";
import img from "./Logo.png";
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <img className="Logo" src={img} alt="Logo" />
                <li><a className= "a-link" href="">Inicio</a></li>
                <li><a className= "a-link" href="">Productos</a></li>
                <li><a className= "a-link" href="">Nosotros</a></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
};

export default NavBar;