import React from 'react';
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/posts" className="navbar__link">
          Posts
        </Link>
        <Link to="/about" className="navbar__link">
          About
        </Link>
      </div>
    </div>
  );
};
