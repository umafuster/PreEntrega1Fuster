import React from 'react';

//CSS
import "./NavBar.css";

//Images
import img from "./Logo.png";

//Material UI
import CartWidget from '../CartWidget/CartWidget';

//React-router-dom
import { Link } from "react-router-dom";


export const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link className="link-logo" to={'/'}>
                <img className="Logo" src={img} alt="Logo" />
                </Link>
                <Link className="a-link" to="/">Home</Link>
                <Link className="a-link" to="/category/:id">Skincare</Link>
                <Link className="a-link" to="/category/:id">Makeup</Link>
                <li className= "a-link"><a className= "a-link" href="">Productos</a></li>
                <li className= "a-link"><CartWidget /></li>
            </ul>
        </nav>
    );
};

export default NavBar;