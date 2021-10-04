import React from 'react';

import './CourseCard.css';
import Rating from 'react-rating';

const CourseCard = (props) => {
  const { title, price, img, level, duration, rating, reviwer } = props.course;
  return (
    <div className="col">
      <div className="card shadow h-100">
        <img src={img} className="card-img-top img-fluid h-75" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-between">
            <div className="">
              <Rating
                readonly
                initialRating={rating}
                emptySymbol="far fa-star fitme-color"
                fullSymbol="fas fa-star fitme-color"
              />{' '}
              (<i className="fas fa-user fitme-color"> </i> {reviwer})
            </div>
            <div>Level-{level}</div>
          </div>
          <div className="d-flex justify-content-between my-2">
            <div className="fs-3 fw-bold">${price}</div>
            <div className="my-auto">
              <i className="far fa-clock fitme-color"></i> {duration} mins
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          {/* oNo functionality implemented for button */}
          <button className="btn fitme-bg text-white text-uppercase">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
