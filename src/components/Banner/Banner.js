import React from 'react';
import './Banner.css';
import banner from '../../img/banner.svg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="fitme-header">
      <div className="row fitme-banner">
        <div className="col-md-6 my-auto mx-auto">
          <h1 className="fs-1 fw-bold lh-lg fitme-color">Fit Me</h1>
          <p className="text-uppercase">
            Yoga is the journey of the self, through the self, to the self.You
            cannot always control what goes on outside. But you can always
            control what goes on inside.{' '}
          </p>
          <Link to="/contact">
            <button className="btn fitme-bg fs-5 text-white">Contact Us</button>
          </Link>
        </div>
        <div className="col-md-6">
          <img className="w-100" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
