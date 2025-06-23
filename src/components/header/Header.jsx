import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
    <header>
        <div className='header-content'>
            <div className='logo'>
                <img src="./img/logo.svg" alt="logo" />
            </div>
            <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
                <ul className='nav-links'>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/">Catálogo</Link>
                    </li>
                    <li>
                        <Link to="/">Contacto</Link>
                    </li>
                </ul>
            </nav>
            <button className='hamburger' onClick={toggleNav}>
                <img src="./img/icon/hamburguer.svg" alt="menu" />
            </button>
        </div>
    </header>
   )
}

export default Header