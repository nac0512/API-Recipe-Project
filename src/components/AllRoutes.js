import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';

const AllRoutes = () => {
    return(
        <Routes>
            <Route exact path='/' component={Home} />

        </Routes>
    );
}

export default AllRoutes;