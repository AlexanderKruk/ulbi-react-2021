import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context';

export const NavBar = () => {
  const {setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.setItem('isAuth', false)
  }
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/posts" className="navbar__link">
          Posts
        </Link>
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <Link to="/about" className="navbar__link" onClick={logout}>
          Logout
        </Link>
      </div>
    </div>
  );
};
