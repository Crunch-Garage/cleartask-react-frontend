import React from "react";
import './Header.css';
import logo from '../assets/logo.png';

const Header = ()=>(
    
    <header className='header'>
        <div className='header-wrapper'>
            <img className="logo" src={logo} alt="logo"/>
        </div>
    </header>
)
export default Header;