import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  function handleNavigation (path) {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-scroller py-1 mb-3 border-bottom nav-width">
          <nav className="nav nav-underline justify-content-around">
            <button
              className="nav-item nav-link link-body-emphasis btn btn-link"
              onClick={() => handleNavigation('/sports')}
            >
              Sports
            </button>
            <button
              className="nav-item nav-link link-body-emphasis btn btn-link"
              onClick={() => handleNavigation('/technology')}
            >
              Technology
            </button>
            <button
              className="nav-item nav-link link-body-emphasis btn btn-link"
              onClick={() => handleNavigation('/politics')}
            >
              Politics
            </button>
            <button
              className="nav-item nav-link link-body-emphasis btn btn-link"
              onClick={() => handleNavigation('/business')}
            >
              Business
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
