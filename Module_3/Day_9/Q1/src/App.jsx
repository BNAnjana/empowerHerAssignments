import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Todos from './Todos';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/todos">Todos</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
