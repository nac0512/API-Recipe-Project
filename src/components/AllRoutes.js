// Setting up pages and the routes to get to them

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import RandomDrink from '../pages/RandomDrink';
import RandomMeal from '../pages/RandomMeal';

const AllRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='randomMeal' element={<RandomMeal />} />
            <Route path='randomDrink' element={<RandomDrink />} />
        </Routes>
    );
}

export default AllRoutes;