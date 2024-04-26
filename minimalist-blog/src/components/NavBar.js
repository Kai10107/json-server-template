// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <i className="ri-send-plane-2-line"></i> My Blog
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/posts/new" style={{ color: '#fff', textDecoration: 'none' }}>
            New Post
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
            About
          </Link>
        </li>
        {/* Add additional navigation links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
