// Navigation component to navigate to seperate pages

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/' style={styles.link}>Home</Link> 
            <Link to='randomMeal' style={styles.link}>Random Meal Recipe</Link>
            <Link to='randomDrink' style={styles.link}>Random Drink Recipe</Link>
        </nav>
    );
}

export default Nav;

const styles= {
    link: {
        paddingLeft:'1.5rem',
        color:'rgb(161,103,74)',
        fontSize:'1.1rem'
    }
}