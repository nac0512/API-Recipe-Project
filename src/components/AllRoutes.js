// Setting up pages and the routes to get to them

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';

const AllRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    );
}

export default AllRoutes;