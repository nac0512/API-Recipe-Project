import React from 'react';
import logo from '../images/logo.png'
import Nav from './Nav';

const Header = () => {
    return(
        <header>
            <img src={logo} alt='Website Logo'></img>
            <h1>Anyone Can Cook</h1>
            <Nav />
        </header>
    );
}

export default Header;