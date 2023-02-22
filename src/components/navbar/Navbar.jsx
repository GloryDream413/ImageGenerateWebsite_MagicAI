import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="magicai_navbar">
            <div className="magicai_navbar-links">
                <div className="magicai_navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                {/* <div className="magicai_navbar-links_container">
                    <Menu />
                </div> */}
            </div>
        </div>
    )
}

export default Navbar