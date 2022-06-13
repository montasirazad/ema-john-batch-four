import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <h2>This is header</h2>
        </div>
    );
};

export default Header;