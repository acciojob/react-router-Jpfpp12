import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Navigation from './Navigation.js';

function App() {
  return (
    <Router>
      <div>
        {/* Do not remove the main div */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
