
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
           My Blog
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
        {}
      </ul>
    </nav>
  );
}

export default NavBar;
