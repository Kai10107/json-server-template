import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <h1> <i class="ri-send-plane-2-line"></i> My Blog </h1> 
      </div>
      <ul className="nav-links"> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts/new">New Post</Link></li>
        <li><Link to="/about">About</Link></li> {/* Add as needed */}
      </ul>
    </nav>
  );
}

export default NavBar; 
