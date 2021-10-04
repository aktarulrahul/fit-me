import React from 'react';
import './Benefits.css';
import benefit from '../../img/benefit.png';

const Benefits = () => {
  return (
    <div className="my-5 text-center">
      <h1 className="fitme-color">Benefits of Yoga & Fit Me</h1>
      <div className="d-flex">
        <div className="fitme-benefit d-flex flex-column justify-content-between ms-4 fs-5">
          <p>Back pain relief</p>
          <p>Weight reduction</p>
          <p>Manage stress</p>
        </div>
        <div className="w-75">
          <img className="w-100" src={benefit} alt="" />
        </div>
        <div className="fitme-benefit d-flex flex-column justify-content-between me-4 fs-5">
          <p>Improves strength & flexibility</p>
          <p>Improved energy and vitality</p>
          <p>Maintaining a balanced metabolism</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
