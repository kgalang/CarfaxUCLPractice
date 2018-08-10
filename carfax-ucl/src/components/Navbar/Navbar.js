import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="top-nav">
            <img className='logo' src={require('../../carfax_logo.png')} alt='logo'/>
            <div className='follow-and-menu-btn'>
                <button className='follow-button'>1</button>
                <img className='menu-icon' src={require('../../burger_menu.png')} alt='menu icon' />
            </div>
        </nav>
    );
}

export default Navbar;