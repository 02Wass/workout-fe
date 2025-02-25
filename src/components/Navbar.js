import React from 'react';
import logo from '../svgs/Logo.svg'; // Import the SVG

import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <><nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Strength" width="32" height="32" />
                <a className="title">Strength</a>
            </div>
        </nav><nav className="navbar-center"><div><a>aaaa</a></div></nav></>
    );
}

export default Navbar;
