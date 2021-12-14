import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='randomMeal'>Random Meal Recipe</Link>
            <Link to='randomDrink'>Random Drink Recipe</Link>
        </nav>
    );
}

export default Nav;