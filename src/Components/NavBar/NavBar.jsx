import React from 'react';

//CSS
import "./NavBar.css";

//Images
import img from "./Logo.png";

import CartWidget from '../CartWidget/CartWidget';


//React-router-dom
import { Link } from "react-router-dom";




export const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link className="link-logo" to={'/'}>
                        <img className="Logo" src={img} alt="Logo" />
                    </Link>
                    <Link className="a-link" to="/">Home</Link>
                    <Link className="a-link" to="/category/Skincare">Skincare</Link>
                    <Link className="a-link" to="/category/Makeup">Makeup</Link>
                    <Link className='a-link' to="/product">Products</Link>
                    <Link className='a-link' to="/cart">
                        <li className="a-link"><CartWidget /></li>
                    </Link>
                </ul>
            </nav>
            <div>
                <hr />
            </div>
        </div>
    );
};

export default NavBar;


