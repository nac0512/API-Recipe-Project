// Setting up React as a multi-view single page application

import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Routes from './components/AllRoutes';

function App() {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>

  );
}

export default App;
