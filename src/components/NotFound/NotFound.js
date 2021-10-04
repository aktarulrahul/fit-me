import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../img/404.svg';

const NotFound = () => {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-4 my-auto">
          <h2 className="fw-bold">400</h2>
          <h3>Page Not Found</h3>
          <p>You may entered wrong URL</p>
          <NavLink to="/">
            <button className="btn btn-warning text-white fw-bold">
              Go To Home Page
            </button>
          </NavLink>
        </div>
        <div className="col-8">
          <img className="img-fluid" src={notFound} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
