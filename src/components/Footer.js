import React from 'react';
import logo from '../images/logo.png';
import Nav from './Nav';

const Footer = () => {
    return(
        <footer>
            <img src={logo} alt='Website Logo'></img>
            <h2>Anyone Can Cook</h2>
            <Nav />
            <ul>
                <li>Pinterest</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
            <p>&copy; 2021 Anyone Can Cook</p>
            <p>Terms &amp; Conditions | Privacy Policy</p>
        </footer>
    );
}

export default Footer;