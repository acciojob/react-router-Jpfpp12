import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ margin: 10 }}>Home</Link>
      <Link to="/about" style={{ margin: 10 }}>About</Link>
    </nav>
  );
}

export default Navigation;
