import React from 'react';

//CSS
import "./Footer.css";

//IMAGES
import img from "./Logo.png";

const Footer = () => {
    return (
        <div>
            <hr className='hr-footer' />
            <nav className='nav-footer'>
                <img className='img-footer' src={img} alt="" />
                <ul className='ul-footer'>
                    <li className='a-link-footer'>Mail: bareessentials@gmail.com</li>
                    <li className='a-link-footer'>Telefono: 0810-555-3456</li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer;