import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid fitme-bg mt-4">
      <div className="row p-4 ">
        <div className="col-6">
          <p className="fs-1 fw-bold text-white text-center">FIT ME</p>
          <div className="d-flex justify-content-center text-white fs-3">
            <i className="fab fa-facebook me-2"></i>
            <i className="fab fa-instagram-square me-2"></i>
            <i className="fab fa-youtube me-2"></i>
            <i className="fab fa-pinterest me-2"></i>
            <i className="fab fa-twitter-square me-2"></i>
          </div>
          <p className="text-white text-center mx-auto mt-2">
            All Rights Reserved
          </p>
        </div>
        <div className="col-6">
          <p className="fs-3 fw-bold text-white text-center">Find Us</p>
          <div className="text-center fs-5 text-white">
            <i className="fas fa-map-marked-alt"></i> 1234, NY 100
            <br />
            <i className="fas fa-phone-volume"></i> +1 6 600 653 23 35
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
