import React from 'react';
import logo from '../images/logo.png'
import Nav from './Nav';

const Header = () => {
    return(
        <header style={styles.header}>
            <img src={logo} alt='Website Logo' style={styles.img}></img>
            <h1 style={styles.h1}>Anyone Can Cook</h1>
            <Nav />
        </header>
    );
}

export default Header;

const styles = {
    header: {
        textAlign:'center',
        padding:'1rem 0',
        backgroundColor:'rgba(81,152,114,.5)'
    }, 
    img: {
        width:'100px',
        verticalAlign:'middle',
        paddingBottom:'1.5rem'

    },
    h1: {
        fontFamily:'Great Vibes',
        fontSize:'4rem',
        display:'inline',
        verticalAlign:'middle'
    }
}