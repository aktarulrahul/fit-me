import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 fitme-band-bg">
          <Link to="/" className="fitme-band ">
            FIT ME
          </Link>
        </div>
        <div className="col-8 my-auto">
          <ul className="d-flex justify-content-center my-auto">
            <Link to="/" className="fitme-menu-item">
              <li>Home</li>
            </Link>
            <Link to="/about" className="fitme-menu-item">
              <li>About</li>
            </Link>
            <Link to="/services" className="fitme-menu-item">
              <li>Services</li>
            </Link>
            <Link to="/contact" className="fitme-menu-item">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
