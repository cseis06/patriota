import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='header-content'>
            <div className='logo'>
                <img src="./img/logo.svg" alt="logo" />
            </div>
            <nav>
                <ul className='nav-links'>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Catálogo</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header